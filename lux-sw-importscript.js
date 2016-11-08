import xin from 'xin';

class LuxSwImportscript extends xin.Component {
  get props () {
    return {
      href: {
        type: String,
        required: true,
      },
    };
  }

  async _getParameters (baseUrl) {
    return {
      importscript: new window.URL(this.href, baseUrl).href,
    };
  }
}

xin.define('lux-sw-importscript', LuxSwImportscript);

export default LuxSwImportscript;
