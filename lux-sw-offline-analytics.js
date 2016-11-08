import xin from 'xin';

import 'file?name=./sw/[name].[ext]!./sw/simple-db.js';
import 'file?name=./sw/[name].[ext]!./sw/offline-analytics.js';

class LuxSwOfflineAnalytics extends xin.Component {
  async _getParameters (baseUrl) {
    return {
      importscript: [
        new window.URL('./sw/simple-db.js', baseUrl).href,
        new window.URL('./sw/offline-analytics.js', baseUrl).href,
      ],
    };
  }
}

xin.define('lux-sw-offline-analytics', LuxSwOfflineAnalytics);

export default LuxSwOfflineAnalytics;
