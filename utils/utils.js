export const isNumber = (number) => {
  return Object.prototype.toString.call(number) === '[object Number]'
}

export const numFormat = (num) => {
  var res = num.toString().replace(/\d+/, function(n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      return $1 + ",";
    });
  })
  return res;
}

export const createSelectorQuery = () => {
  return new Promise(resolve => {
    my.createSelectorQuery().select('.count-up .item').boundingClientRect().exec((ret) => {
      if (ret && ret[0]) {
        resolve(ret[0].height);
      }
    })
  })
}

export const throttle = (fn, delay) => {
  var timer;
  return function() {
    var _this = this;
    var args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function() {
      fn.apply(_this, args);
      timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay)
  }
}
