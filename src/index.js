module.exports = function check(str, bracketsConfig) {
  let x = str.split('')
  for (let i = 0; i < x.length; i++){
    bracketsConfig.forEach((item) => {
      if (x[i] === item[0] && x[i + 1] === item[1]){
        x.splice(i, 2)
        i -= 2
      }
    })
  }

  return x.length === 0 ? true : false
}
