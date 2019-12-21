function styles(item = 0){
  let styleRes = `transform:translate3d(0,${-80*(item==='.' ? 10 : item)}rpx,0);transition:all ${item > 3 ? (item / 3) : item == 0 ? 1 : item * 1}s cubic-bezier(.25,.1,.25,1)`;
  return styleRes;
}

export default styles;