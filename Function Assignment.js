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

let myArray =[1234,56789, 5657,5766,9999,90];

//console.log (returnMinValue(myArray))

function getFrequency(array, number){
    let frequency = 0;

    for(let x of array){
        if (x === number){
            frequency += 1;
        }
    }
    return frequency;
}



function maxValue(numberArray){
    const highestValue = [0];
    let results = numbers[0];

    for( let i = 0; i < highestValue.length; i++){
        if ( numbers[i] > results){
            results = numbers[i];
        }
    }
    return results
}

console.log(maxValue(myArray));