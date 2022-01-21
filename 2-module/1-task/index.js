function sumSalary(salaries) {

  let sum =[];

  for (s in salaries){
  
  // console.log(salaries[s])
  
  if (typeof salaries[s]=='number') {
  
    sum.push(salaries[s]);
  }
  
  }
  
  return sum.reduce((a, b)=> a+b)

}
