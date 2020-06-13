Page({
  data: {
    number: 176, // 传入数字
    symbol:',' // 千位分割
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        number: 99643
      });
    },3000);
  },
});
