function sumSalary(salaries) {

  let sum =[];

  for (let s in salaries){
  
 
  if (typeof salaries[s]=='number') {
  
  if ((isFinite(salaries[s]))){
  
     sum.push(salaries[s]);
  }
  }
  
  }
  
  if (sum.length!==0) return sum.reduce((a, b)=> a+b)

return 0;

}
