function factorial(n) {
 
if (n==0) {
    
    return 1;}

if (n==1) {
    
    return 1;}

let res = n;

for (let i=0; i<n-1; i++) {

res = res * (n-i-1);

}

return res;

}
