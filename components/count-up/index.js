import { isNumber, numFormat } from './../../utils/utils';

Component({
  didMount() {
    this.animate();
  },
  didUpdate(prevProps) {
    if(prevProps.numberItem !== this.props.numberItem){
      this.animate();
    }
  },
  methods: {
    // 数字滚动动画
    animate() {
      const itemHeight = 40;
      const { symbol,numberItem } = this.props;
      let numberValue = symbol ? numFormat(numberItem,symbol) : numberItem;
      let res = isNumber(numberValue) ? numberValue.toString().split('') : numberValue.split('');
      let styleArr = [];
      res.forEach((item) => {
        styleArr.push(
          `transform:translateY(${(item === '.' ? -10 * itemHeight : item === symbol ? -11 * itemHeight : -item * itemHeight)}px);transition:all ${item === '.' || item === symbol ? 0 : 1}s cubic-bezier(.25,.1,.25,1)`
        )
      });
      this.setData({
        styleArr
      })
    }
  }
});