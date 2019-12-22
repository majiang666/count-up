import { isNumber } from './../../utils/utils';

Page({
  data: {
    numberRes: ''
  },
  onLoad(query) {
    this.setNumber(71);
  },
  // 设置滚动数字，重置0必须先执行
  setNumber(numberValue) {
    this.setData({
      numberRes: numberValue
    });
    this.animate(numberValue);
  },
  animate(numberValue) {
    let res = isNumber(numberValue) ? numberValue.toString().split('') : numberValue.split('');
    let arrs = [];
    res.forEach((item) => {
      arrs.push(
        `transform:translateY(${parseInt(-60 * item)}rpx);transition:all ${item > 3 ? (item / 3) : item == 0 ? 1 : item * 1}s cubic-bezier(.25,.1,.25,1)`
      )
    });
    setTimeout(() => {
      this.setData({
        arrs
      })
    }, 800);
  },
  changeNum1() {
    this.setNumber(99);
  },
  changeNum2() {
    this.setNumber(104);
  },
  changeNum3() {
    this.setNumber(926);
  }
});
