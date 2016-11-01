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
  async _getParameters () {
    return {
      importscript: new window.URL(this.href, window.location.href).href,
    };
  }
}

xin.define('lux-sw-importscript', LuxSwImportscript);

export default LuxSwImportscript;
