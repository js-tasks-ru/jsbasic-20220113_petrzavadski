function getMinMax(str) {

let arr = [];

str.split(' ').forEach(item=> {
    
   if (isFinite(item) && (item)) arr.push(+item) 
  
  });
  
  let max = +arr.reduce((a, b)=> (a>b ? a : b));
  let min = +arr.reduce((a, b)=> (a>b ? b : a));
  
  return {min, max};

};
