import { isNumber } from './../../utils/utils';

Component({
  data: {
    numberArr: []
  },
  async didMount() {
    this.numberToArr(this.props.numberRes);
  },
  didUpdate() {
    this.numberToArr(this.props.numberRes);
  },
  methods: {
    numberToArr(num) {
      let res = isNumber(num) ? num.toString().split('') : num.split('');
      this.setData({
        numberArr: res || []
      });
    }
  }
});