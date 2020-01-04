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
});
