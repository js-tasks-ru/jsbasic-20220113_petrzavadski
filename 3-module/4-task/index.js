function showSalary(users, age) {
  
  let res = users.filter(item=>item.age<=age);

  let newRes= res.map((r, index)=> {
    
  return (index==res.length-1) ? (r.name+', '+ r.balance) : (r.name+', '+ r.balance + '\n');
    
   }).join('');
  
  return newRes;

};
