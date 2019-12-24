// 分割数字
const splitK = (num, symbol) => {
  var decimal = num.toString().split('.')[1] || '';//小数部分
  var tempArr = [];
  var revNumArr = num.toString().split('.')[0].split("").reverse();//倒序
  revNumArr.forEach((v, i) => {
    tempArr.push((v));
    if ((i + 1) % 3 === 0 && i != revNumArr.length - 1) {
      tempArr.push(symbol);
    }
  })
  var integer = tempArr.reverse().join('');//整数部分
  return decimal ? integer + '.' + decimal : integer;
}

// 分割数字为数组
const splitNumberArr = (num, symbol) => {
  let numberValue = symbol ? splitK(num, symbol) : num;
  let numberArr = typeof numberValue === 'number' ? numberValue.toString().split('') : numberValue.split('');
  return numberArr;
}

export default splitNumberArr;
