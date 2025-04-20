

function sumSalary(salaries) {
  let sumSalary = 0

  if (Object.keys(salaries).length === 0 || salaries.isPayed) return sumSalary
  for (let key in salaries) {

    if (typeof salaries[key] === 'number' &&  isFinite(salaries[key]) ) {

      sumSalary += salaries[key]
  }}

  return sumSalary
}


