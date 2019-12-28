import { createSelectorQuery, getSystemInfo } from './../../utils/utils';

Page({
  data: {
    numberList: [176], // 传入数字
    symbol:',' // 千位分割
  },
  onLoad(query) {
    setTimeout(() => {
      this.setData({
        numberList: [...this.data.numberList,8378.93,222,99643]
      });
    },3000);
  },
  // dom加载完成，获取数字元素实际高度
  async onReady() {
    const itemHeight = await createSelectorQuery('.count-up .item');
    const { windowWidth } = await getSystemInfo();
    this.setData({
      itemHeight: this.pxTorpx(itemHeight,windowWidth)
    })
  },
  pxTorpx(itemHeight,windowWidth){
    return itemHeight * (750 / windowWidth);
  }
});
