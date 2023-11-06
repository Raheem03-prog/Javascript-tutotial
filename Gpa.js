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

userGrades.english = prompt('Enter your English grade');
userGrades.french = prompt('Enter your French grade');
userGrades.mathematics = prompt('Enter your Math grade');
userGrades.physics = prompt('Enter your Physics grade');
userGrades.chemistry = prompt('Enter your Chemistry grade');
userGrades.biology = prompt('Enter your Biology grade');
userGrades.workshop= prompt('Enter your Workshop grade');
userGrades.technicalDrawing = prompt('Enter your T.D grade');
userGrades.humanities= prompt('Enter your Humanities grade');

let englishScore = 0;
if (userGrades.english === 'A'){
    englishScore = courseUnits.english * grades.A;
}
else if (userGrades.english === 'B'){
    englishScore = courseUnits.english * grades.B;
}
else if (userGrades.english === 'C'){
    englishScore = courseUnits.english * grades.C;
}
else if (userGrades.english === 'D'){
    englishScore = courseUnits.english * grades.D;
}
else if (userGrades.english === 'E'){
    englishScore = courseUnits.english * grades.E;
}
else {
    englishScore = 0;
}

let frenchScore = 0;
if (userGrades.french === 'A'){
    frenchScore = courseUnits.french * grades.A;
}
else if (userGrades.french === 'B'){
    frenchScore = courseUnits.french * grades.B;
}
else if (userGrades.french === 'C'){
    frenchScore = courseUnits.french * grades.C;
}
else if (userGrades.french === 'D'){
    frenchScore = courseUnits.french * grades.D;
}
else if (userGrades.french === 'E'){
    frenchScore = courseUnits.french * grades.E;
}
else {
    frenchScore = 0;
}

let mathematicsScore = 0;
if (userGrades.mathematics === 'A'){
    mathematicsScore = courseUnits.mathematics * grades.A;
}
else if (userGrades.mathematics === 'B'){
    mathematicsScore = courseUnits.mathematics * grades.B;
}
else if (userGrades.mathematics === 'C'){
    mathematicsScore = courseUnits.mathematics * grades.C;
}
else if (userGrades.mathematics === 'D'){
    mathematicsScore = courseUnits.mathematics * grades.D;
}
else if (userGrades.mathematics === 'E'){
    mathematicsScore = courseUnits.mathematics * grades.E;
}
else {
    mathematicsScore = 0;
}

let physicsScore = 0;
if (userGrades.physics === 'A'){
    physicsScore = courseUnits.physics * grades.A;
}
else if (userGrades.physics === 'B'){
    physicsScore = courseUnits.physics * grades.B;
}
else if (userGrades.physics === 'C'){
    physicsScore = courseUnits.physics * grades.C;
}
else if (userGrades.physics === 'D'){
    physicsScore = courseUnits.physics * grades.D;
}
else if (userGrades.physics === 'E'){
    physicsScore = courseUnits.physics * grades.E;
}
else {
    physicsScore = 0;
}

let chemistryScore = 0;
if (userGrades.chemistry === 'A'){
    chemistryScore = courseUnits.chemistry * grades.A;
}
else if (userGrades.chemistry === 'B'){
    chemistryScore = courseUnits.chemistry * grades.B;
}
else if (userGrades.chemistry === 'C'){
    chemistryScore = courseUnits.chemistry * grades.C;
}
else if (userGrades.chemistry === 'D'){
    chemistryScore = courseUnits.chemistry * grades.D;
}
else if (userGrades.chemistry === 'E'){
    chemistryScore = courseUnits.chemistry * grades.E;
}
else {
    chemistryScore = 0;
}

let biologyScore = 0;
if (userGrades.biology === 'A'){
    biologyScore = courseUnits.biology * grades.A;
}
else if (userGrades.biology === 'B'){
    biologyScore = courseUnits.biology * grades.B;
}
else if (userGrades.biology === 'C'){
    biologyScore = courseUnits.biology * grades.C;
}
else if (userGrades.biology === 'D'){
    biologyScore = courseUnits.biology * grades.D;
}
else if (userGrades.biology === 'E'){
    biologyScore = courseUnits.biology * grades.E;
}
else {
    biologyScore = 0;
}

let workshopScore = 0;
if (userGrades.workshop === 'A'){
    workshopScore = courseUnits.workshop * grades.A;
}
else if (userGrades.workshop === 'B'){
    workshopScore = courseUnits.workshop * grades.B;
}
else if (userGrades.workshop === 'C'){
    workshopScore = courseUnits.workshop * grades.C;
}
else if (userGrades.workshop === 'D'){
    workshopScore = courseUnits.workshop * grades.D;
}
else if (userGrades.workshop === 'E'){
    workshopScore = courseUnits.workshop * grades.E;
}
else {
    workshopScore = 0;
}

let technicalDrawingScore = 0;
if (userGrades.technicalDrawing === 'A'){
    technicalDrawingScore = courseUnits.technicalDrawing * grades.A;
}
else if (userGrades.technicalDrawing === 'B'){
    technicalDrawingScore = courseUnits.technicalDrawing * grades.B;
}
else if (userGrades.technicalDrawing === 'C'){
    technicalDrawingScore = courseUnits.technicalDrawing * grades.C;
}
else if (userGrades.technicalDrawing === 'D'){
    technicalDrawingScore = courseUnits.technicalDrawing * grades.D;
}
else if (userGrades.technicalDrawing === 'E'){
    technicalDrawingScore = courseUnits.technicalDrawing * grades.E;
}
else {
    technicalDrawingScore = 0;
}

let humanitiesScore = 0;
if (userGrades.humanities === 'A'){
    humanitiesScore = courseUnits.humanities * grades.A;
}
else if (userGrades.humanities === 'B'){
    humanitiesScore = courseUnits.humanities * grades.B;
}
else if (userGrades.humanities === 'C'){
    humanitiesScore = courseUnits.humanities * grades.C;
}
else if (userGrades.humanities === 'D'){
    humanitiesScore = courseUnits.humanities * grades.D;
}
else if (userGrades.humanities === 'E'){
    humanitiesScore = courseUnits.humanities * grades.E;
}
else {
    humanitiesScore = 0;
}

const totalScore = englishScore + frenchScore + mathematicsScore + physicsScore + chemistryScore + biologyScore + workshopScore + technicalDrawingScore + humanitiesScore;

const totalUnits = courseUnits.english + courseUnits.french + courseUnits.mathematics + courseUnits.physics + courseUnits.chemistry + courseUnits.biology +courseUnits.workshop + courseUnits.technicalDrawing + courseUnits.humanities;

const gpa = totalScore / totalUnits;

document.write(gpa);