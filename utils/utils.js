export const isNumber = (number) => {
  return Object.prototype.toString.call(number) === '[object Number]'
}

export const numFormat = (num,symbol) => {
  var res = num.toString().replace(/\d+/, function(n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      return $1 + symbol;
    });
  })
  return res;
}

export const createSelectorQuery = (dom) => {
  return new Promise(resolve => {
    my.createSelectorQuery().select(dom).boundingClientRect().exec((ret) => {
      if (ret && ret[0]) {
        resolve(ret[0].height);
      }
    })
  })
}

export const getSystemInfo = () => {
  return new Promise(resolve => {
    my.getSystemInfo({
      success: (res) => {
        resolve(res);
      }
    })
  })
  }