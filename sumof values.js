function sumOfTwoValues(Number , Boolean){ 
    let result = 0;
   let x = 1;
   if ((Number % 2 === 0 ) && (Boolean === true)){
    Number--

    while(x < Number){
        result = result + x;
        x = x + 2;
       }
       if(Number < 1){
        return result;
       }
       return result + Number
    }
    else{
       
       let x = 2;
       if ( (Number % 2 !== 0) && (Boolean === false) )
       Number--
        while(x < Number){
        result += x;
        x = x + 2
        }
        return result + Number
    }
    }
console.log (sumOfTwoValues(5,false));