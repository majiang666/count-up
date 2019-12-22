import { isNumber, numFormat } from './../../utils/utils';

Page({
  data: {
    numberRes: ''
  },
  onLoad(query) {
    this.setNumber(71.6);
  },
  setNumber(numberValue) {
    this.setData({
      numberRes: numberValue
    });
    this.onReady();
  },
  onReady() {
    const numberValue = this.data.numberRes;
    my.createSelectorQuery()
      .select('.count-up .item').boundingClientRect().exec((ret) => {
        if (ret && ret[0]) {
          let itemHeight = ret[0].height;
          this.animate(numberValue, itemHeight);
        }
      })
  },
  animate(numberValues, itemHeight) {
    let numberValue = numFormat(numberValues)
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
  changeNum1() {
    this.setNumber(99);
  },
  changeNum2() {
    this.setNumber(10456);
  },
  changeNum3() {
    this.setNumber(9269.44);
  }
});
