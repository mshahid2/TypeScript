var myName = "MD Shahid";
console.log("My name : " + myName);
var student1 = {
    "name": "Shahid1",
    "LastName": "MD"
};
var student2 = {
    "name": "Shahid2",
    "LastName": "MD",
    "age": 23
};
var student3 = {
    "name": "shahid3",
    "LastName": "MD",
    "age": 23
};
var studentList = [student1, student2, student3];
studentList.forEach(function (item) {
    console.log(item.name);
    console.log(item.LastName);
    console.log(item.age);
});
