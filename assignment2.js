const students = [
    { name : "Ade", age: 13, grade: 'A'},
    { name : "Bolu", age: 16, grade: 'B'},
    { name : "Ayo", age: 14, grade: 'C'},
    { name : "Akin", age: 16, grade: 'B'},
    { name : "jude", age: 17, grade: 'A'},
    { name : "Joshua", age: 15, grade: 'C'},
];

function filterByGrade(students, grade){
    return students.filter((student)=> student.grade===grade)
}

function averageAge(students){
    const sum = students.reduce((acc, student)=> acc+ student.age, 0)
    return sum/ students.length

}
console.log (filterByGrade(students, 'A'))

console.log (filterByGrade(students, 'C'))

console.log (filterByGrade(students, 'B'))

console.log(averageAge(students))
// loops
function averageAgeUsingLoops(students){
    let sum = 0
    for (let i = 0;i < students.length; i++){
        sum+= students[i].age
    }
    return sum/students.length
}
console.log(averageAgeUsingLoops(students))