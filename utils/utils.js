export const isNumber = (number) => {
  return Object.prototype.toString.call(number) === '[object Number]'
}