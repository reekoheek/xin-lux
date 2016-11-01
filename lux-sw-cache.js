import xin from 'xin';

class LuxSwCache extends xin.Component {
  get props () {
    return xin.mix(super.props, {
      precache: {
        type: Array,
        value: () => ([]),
      },
    });
  }

  async _getParameters () {
    return {
      precache: this.precache,
    };
  }
}

xin.define('lux-sw-cache', LuxSwCache);

export default LuxSwCache;
