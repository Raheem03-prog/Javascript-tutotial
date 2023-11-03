// collection of student Grades using prompt //

let english = prompt('enter English Grade');
let french = prompt('enter French Grade');
let mathematics = prompt('enter Maths Grade');
let physics = prompt('enter Physics Grade');
let chemistry = prompt('enter chemistry Grade');
let biology = prompt('enter Biology Grade');
let workshop = prompt('enter Workshop Grade');
let technicalDrawing = prompt('enter Technicaldrawing Grade');
let humanities = prompt('enter Humanities Grade');

let courses = {
    english,
    french,
    mathematics,
    physics,
    chemistry,
    biology,
    workshop,
    technicalDrawing,
    humanities,
}

console.log(courses);

// To calculate the student Gpa //

const englishUnit = 2;
const frenchUnit = 1;
const mathsUnit = 4;
const physicsUnit = 4;
const chemistryUnit = 4;
const biologyUnit = 3;
const workshopUnit = 1;
const technicalDrawingUnit = 1;
const humanitiesUnit = 1;

const A = 5 ;
const B = 4 ;
const C = 3 ;
const D = 2 ;
const E = 1 ;
const F = 0 ;

english = englishUnit * A; 

french = frenchUnit *  B ;

mathematics = mathsUnit * C;

physics = physicsUnit * D;

chemistry = chemistryUnit * E;

biology = biologyUnit * C;

workshop = workshopUnit * F;

technicalDrawing = technicalDrawingUnit * F;

humanities = humanitiesUnit * C;

const gradePoints = english + french + mathematics + physics + chemistry + biology + workshop + technicalDrawing + humanities;

const totalCourses = 9;

const Gpa = gradePoints / totalCourses;
