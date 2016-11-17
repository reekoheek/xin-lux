import xin from 'xin';

import 'file-loader?name=./sw/[name].[ext]!./sw/service-worker.js';
import 'file-loader?name=./sw/sw-toolbox/[name].[ext]!sw-toolbox/sw-toolbox.js';
import 'file-loader?name=./sw/sw-toolbox/[name].[ext]!sw-toolbox/sw-toolbox.js.map';

function isServiceWorkerSupported () {
  return 'serviceWorker' in navigator;
}

class LuxSw extends xin.Component {
  get props () {
    return Object.assign({}, super.props, {
      href: {
        type: String,
        value: 'sw-import.js',
      },

      skipWaiting: {
        type: Boolean,
        value: false,
      },

      clientsClaim: {
        type: Boolean,
        value: false,
      },

      debug: {
        type: Boolean,
        value: false,
      },

      defaultCacheStrategy: {
        type: String,
        value: 'networkFirst',
      },
    });
  }

  async attached () {
    super.attached();

    if (!isServiceWorkerSupported()) {
      console.error('Service worker is not supported!');
      return;
    }

    try {
      let params = {
        version: '1.0',
        skipWaiting: this.skipWaiting,
        clientsClaim: this.clientsClaim,
        debug: this.debug,
        defaultCacheStrategy: this.defaultCacheStrategy,
      };

      let baseUrl = new window.URL(this.href, window.location.href);

      let childParams = await Promise.all([].map.call(this.children, el => el._getParameters(baseUrl)));

      childParams.forEach(param => {
        Object.keys(param).forEach(key => {
          params[key] = (params[key] || []).concat(param[key]);
        });
      });

      let url = `${this.href}?${this._serializeUrlParams(params)}`;
      let registration = window.sw = await navigator.serviceWorker.register(url);

      console.info(`Service worker registration successful with scope: ${registration.scope}`);
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
      console.warn(`
Maybe, a valid service worker script not found "${this.href}"
Create new file "${this.href}" and copy paste lines below,

\`\`\`javascript

importScripts('/sw/service-worker.js');

\`\`\``);
    }
  }

  _serializeUrlParams (params) {
    return Object.keys(params).sort().map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
  }
}

xin.define('lux-sw', LuxSw);

export default LuxSw;
