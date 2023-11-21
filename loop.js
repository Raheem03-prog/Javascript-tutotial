let userInput = prompt("Guess a luckyNumber between 1 - 100");

let luckynumber = 78;

let trials = 0;
while( (trials < 5) && ( userInput != luckynumber)){
    trials ++;
    let promptMessage = "Wrong guesss, Try again" + " " + trials + " Trials Used";
    prompt(promptMessage);
    if( userInput == luckynumber){
        alert("Congratulations you are the Winner");
    }
}
 

function isValid(grade) {
    let validity = grade ==='A'||
                    grade ==='B'||
                    grade ==='C'||
                    grade === 'D'||
                    grade === 'E'||
                    grade === 'F'
    return validity;
}

function fetchUserGrade(course) {
    let promptMessage = 'What was your grade in ' + course;
    let grade = prompt(promptMessage);
    

    while (!isValid(grade)) {
        promptMessage = "Incorrect Value.please type in your grade in " + course;
        grade = prompt(promptMessage)
    }

    return grade;
}


let validity = userGrades.english ==='A' ||
                userGrades.english ==='B' ||
                userGrades.english ==='C' ||
                userGrades.english ==='D' ||
                userGrades.english ==='E' ||
                userGrades.english === 'F';

while(!validity) {
    userGrades.english = prompt('Wrong grade input, Please type in the correct grade for English')
    validity =  userGrades.english ==='A' ||
                userGrades.english ==='B' ||
                userGrades.english ==='C' ||
                userGrades.english ==='D' ||
                userGrades.english ==='E' ||
                userGrades.english === 'F';
}