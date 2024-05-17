// 18.Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
// If Arun has a score of
// Written test = 81, Lab exams = 68, Assignments = 92
// Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
//  Write a program to find the grade of a student during his academic year. 
// a.Program should accept the scores for written test, lab exams and assignments
// b.Output the grade of a student (using weighted average)
const prompt=require("prompt-sync")();
const written=prompt("Written test : ")
const lab=prompt("Lab test     : ")
const assignments=prompt("Assignment   : ")

const grade= (written*70)/100 + (lab*20)/100 + (assignments*10)/100
console.log(`Grade of the student is ${grade}%`);