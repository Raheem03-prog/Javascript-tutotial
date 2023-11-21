const courseUnits = {
    english: 2,
    french: 1,
    mathematics: 4,
    physics: 4,
    chemistry: 4,
    biology: 3,
    workshop: 1,
    technicalDrawing: 1,
    humanities: 1,
}

const grades = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
}

const userGrades = {};

userGrades.english = fetchUserGrade('English');
userGrades.french = fetchUserGrade('French');
userGrades.mathematics = fetchUserGrade('Mathematics');
userGrades.physics = fetchUserGrade('Physics');
userGrades.chemistry = fetchUserGrade('Chemistry');
userGrades.biology = fetchUserGrade('Biology');
userGrades.workshop=fetchUserGrade('Workshop');
userGrades.technicalDrawing = fetchUserGrade('T.D');
userGrades.humanities= fetchUserGrade('Humanities');

const englishScore = subjectScore( userGrades.english , courseUnits.english);
const frenchScore = subjectScore( userGrades.frenchScore ,courseUnits.french);
const mathematicsScore = subjectScore( userGrades.mathematics ,courseUnits.mathematics);
const physicsScore = subjectScore( userGrades.physics, courseUnits.physics);
const chemistryScore = subjectScore( userGrades.chemistry ,courseUnits.chemistry);
const biologyScore = subjectScore( userGrades.biology , courseUnits.biology);
const workshopScore = subjectScore( userGrades.workshop , courseUnits.workshop);
const technicalDrawingScore = subjectScore( userGrades.technicalDrawing , courseUnits.technicalDrawing);
const humanitiesScore = subjectScore( userGrades.humanities , courseUnits.humanities);


function subjectScore(grade, units) {
    let score;
    if ( grade ==='A'){
        score = 5 * units;
    }
    else if ( grade === 'B'){
        score = 4 * units;
    }
    else if ( grade === 'C'){
        score = 3 * units;
    }
    else if ( grade === 'D'){
        score = 2 * units;
    }
    else if ( grade === 'E'){
        score = 1 * units;
    }
    else {
        score = 0;
    }
    
    return score;
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

const totalScore = englishScore + frenchScore + mathematicsScore + physicsScore + chemistryScore + biologyScore + workshopScore + technicalDrawingScore + humanitiesScore;

const totalUnits = courseUnits.english + courseUnits.french + courseUnits.mathematics + courseUnits.physics + courseUnits.chemistry + courseUnits.biology +courseUnits.workshop + courseUnits.technicalDrawing + courseUnits.humanities;

const gpa = totalScore / totalUnits;

document.write(gpa);