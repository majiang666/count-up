import { isNumber, numFormat } from './../../utils/utils';

Component({
  data: {
    numberArr: [],
  },
  async didMount() {
    this.numberToArr(this.props.numberRes);
  },
  didUpdate() {
    this.numberToArr(this.props.numberRes);
  },
  methods: {
    numberToArr(nums) {
      let num = this.props.symbol ? numFormat(nums) : nums;
      let res = isNumber(num) ? num.toString().split('') : num.split('');
      this.setData({
        numberArr: res || []
      });
    }
  }
});