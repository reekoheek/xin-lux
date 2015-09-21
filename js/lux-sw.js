(function(root) {
  'use strict';

  var swToolPath = new URL(document.currentScript.src).pathname.split('/').slice(0, -1).join('/') + '/sw-tool.js';

  var xin = root.xin;

  xin.Component({
    is: 'lux-sw',

    properties: {
      href: {
        type: String,
        value: 'service-worker.js',
      },

      skipWaiting: Boolean,

      clientsClaim: Boolean,
    },

    ready: function() {
      if ('serviceWorker' in navigator) {
        try {
          var params = [];
          if (this.skipWaiting) {
            params.push('skipWaiting=true');
          }
          if (this.clientsClaim) {
            params.push('clientsClaim=true');
          }
          var url = this.href + (params.length ? ('?' + params.join('&')) : '');
          navigator.serviceWorker.register(url)
            .then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ',    registration.scope);
              }.bind(this), function(err) {
                if (err.name === 'NetworkError') {
                  console.warn('A valid service worker script not found "' + this.href + '".\n' +
                    'Create new file "' + this.href + '" and copy paste lines below,\n\n' +
                    'importScripts(\'' + swToolPath + '\');\n' +
                    'SWTool.initialize();\n');
                } else {
                  console.error('ServiceWorker registration failed: ', err);
                }
              }.bind(this));
        } catch(e) {
          console.log('xxx', e);
        }
      }
    }
  });
})(this);