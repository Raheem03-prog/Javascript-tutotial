function returnMaxValue(numberArray){
    let highestNumber = numberArray[0] || 0 ;
    for (let x of numberArray){
        if(x > highestNumber ){
            highestNumber = x ;
        }
    }
     return highestNumber
}


function returnMinValue(numberArray){
    let lowestNumber = numberArray[0] || 0 ;
    for(let x of numberArray){
        if( x < lowestNumber){
            lowestNumber = x ;
        }
    }

    return lowestNumber; 
}

let myArray =[];

console.log (returnMinValue(myArray))