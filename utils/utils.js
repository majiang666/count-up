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
