function getMinMax(str) {
  const array = str.split(" ").filter(el =>  isFinite(el))

  const min= Math.min(...array)
  const max = Math.max(...array)
  return {"min" : min, "max" : max}

}
