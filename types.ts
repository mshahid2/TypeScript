let myName :string = "MD Shahid";
console.log("My name : " + myName);

interface IStudent{
    name : string;
    LastName :string;
    age? : number;
}

interface ITeacher
{
    name :string;
}

namespace Education
{
    export type student = IStudent;
    export type teacher = ITeacher;
 
}

var student1 = {
    "name" : "Shahid1",
    "LastName" : "MD"
}
  

var student2 = {
    "name" : "Shahid2",
    "LastName" : "MD",
    "age" :23
}

var student3 = {
    "name" : "shahid3",
    "LastName" : "MD",
    "age" :23
}

var studentList :Education.student[] = [student1,student2,student3];

studentList.forEach(item =>{
    console.log(item.name);
    console.log(item.LastName);
    console.log(item.age);
})
