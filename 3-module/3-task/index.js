function camelize(str) {

return str.split('-').map((str, i)=> {
 
  return (i==0) ? str : str[0].toUpperCase() + str.slice(1);
            
}
    
).join('');

};
