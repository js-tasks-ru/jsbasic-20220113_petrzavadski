function sumSalary(salaries) {

  let sum=0;

  for (let s in salaries) {


  if (typeof salaries[s]=='number') {

  if ((isFinite(salaries[s]))) sum+=salaries[s];

  }

  }
  
  return sum
}
