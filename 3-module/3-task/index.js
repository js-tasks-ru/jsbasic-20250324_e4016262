function camelize(str) {
  if (str === '') return '';







  return str.split('-').map(function(el, index){

    return (el !== "") ? (index===0) ?  el :
      el[0].toUpperCase()+el.slice(1): ''}).join('')
  // ваш код...
}
