function sumOfEvenNubers(num){
   let result = 0;
   let x = 1;
   if (num % 2 === 0){
    num--
   }
   
   while(x < num){
    result = result + x;
    x = x + 2;
   }
   if(num < 1){
    return result;
   }
   return result + num;
}

console.log (sumOfEvenNubers(8))