function returnSum(Number){
let result = 0;
while(Number > 0){
    result = result + Number;
    Number--;
}
if(Number < 0){
    result = 0 ;
}
return result
}

let sum = returnSum(-5);
console.log(sum);
