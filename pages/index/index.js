import { isNumber } from './../../utils/utils';

Page({
  data: {
    numberRes: ''
  },
  onLoad(query) {
    this.setNumber(6);
    setTimeout(() => {
      this.setNumber(9);
    }, 5000)
    setTimeout(() => {
      this.setNumber(701);
    }, 9000)
  },
  // 设置滚动数字，重置0必须先执行
  async setNumber(numberValue = 0) {
    await this.resetNum(numberValue);
    this.setData({
      numberRes: numberValue
    });
  },
  // 每次都要先重置为0，不然默认和数字位数变化时不会滚动，暂时没找到更好的解决方案
  resetNum(number) {
    let resetVal = null;
    let res = isNumber(number) ? number.toString().split('') : number.split('');
    resetVal = res.map(() => {
      return '0';
    }).join('');
    console.log(resetVal);
    this.setData({
      numberRes: resetVal
    });
  }
});
