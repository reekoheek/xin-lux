import xin from 'xin';
import FastClick from './thirdparty/fastclick';

let attached = false;

class LuxFastclick extends xin.Component {
  created () {
    if (attached) return;

    attached = true;

    FastClick.attach(document.body);
  }
}

xin.define('lux-fastclick', LuxFastclick);

export default LuxFastclick;
