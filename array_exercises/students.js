const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Rajesh Akurati", marks: 100 },
    { name: "Vikram", marks: 72 },
];

function studentsAboveCriteria(array, criteria) {
    const toppers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].marks >= criteria) toppers.push(array[i].name)
    }
    return toppers;
}

console.log(studentsAboveCriteria(students, 70));