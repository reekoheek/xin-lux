import xin from 'xin';

class LuxSwFetch extends xin.Component {
  get props () {
    return xin.mix(super.props, {
      handler: {
        type: String,
        required: true,
      },

      path: {
        type: String,
        required: true,
      },

      origin: {
        type: String,
        value: '',
      },
    });
  }

  async _getParameters () {
    return {
      route: [ this.path, this.handler, this.origin ],
    };
  }
}

xin.define('lux-sw-fetch', LuxSwFetch);

export default LuxSwFetch;
