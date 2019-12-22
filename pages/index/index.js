import { isNumber, numFormat, createSelectorQuery } from './../../utils/utils';

Page({
  data: {
    numberRes: '', // 传入数字
    symbol:',' // 千位分割
  },
  onLoad(query) {
    this.setNumber(716);
  },
  // dom加载完成，获取数字元素实际高度
  async onReady() {
    const itemHeight = await createSelectorQuery();
    this.animate(itemHeight);
  },
  // 数字滚动动画
  animate(itemHeight) {
    const { symbol, numberRes } = this.data;
    let numberValue = symbol ? numFormat(numberRes) : numberRes;
    let res = isNumber(numberValue) ? numberValue.toString().split('') : numberValue.split('');
    let styleArr = [];
    res.forEach((item) => {
      styleArr.push(
        `transform:translateY(${(item === '.' ? -10 * itemHeight : item === ',' ? -11 * itemHeight : -item * itemHeight)}px);transition:all ${item === '.' || item === ',' ? 0 : 1}s cubic-bezier(.25,.1,.25,1)`
      )
    });
    this.setData({
      styleArr
    })
  },
  setNumber(numberValue) {
    this.setData({
      numberRes: numberValue
    });
    this.onReady(); // 必须等到元素加载完成，给数字设置距离，暂时没想到好的解决方案
  },
  changeNum1() {
    this.setNumber(99);
  },
  changeNum2() {
    this.setNumber(10456);
  },
  changeNum3() {
    this.setNumber(926944);
  }
});
