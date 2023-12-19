function reverseStr(strings){
    let newStrings = "";
    for (let x = strings.length - 1; x >= 0; x--) {
        newStrings += strings[x];
    }
    return newStrings;
}

let userinput = prompt('Type any word');

const reverseStrings = reverseStr(userinput);

document.write(reverseStrings);