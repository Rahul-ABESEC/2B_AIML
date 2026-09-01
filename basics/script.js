// let data={
//     Name:"Rahul",
//     Age:18,
//     RollNo:147,
//     Branch:"AIML",
//     City:"Ghaziabad",
//     Salary:function(){
//         document.write("Salary")
//     },
//     Subject:["Data Visualization","DSA","Web-D","OOPS with C++"],
// }
// console.log(data.Subject[0])
// console.log(data.Salary)
// let student=new Object();
// student.name="Rahul Sharma"
// student.age=18
// student.Pincode=201002
// student.salary=function(){
//     document.write("Salary")
// }
// student.subject=["Data Visualization","DSA","Web-D","OOPS with C++"]
// console.log(student)
function student(Name,RollNo,Pincode,City){
    this.Name=Name;
    this.RollNo=RollNo;
    this.Pincode=Pincode;
    this.City=City;
    this.display=function(){
        console.log(Name)
        console.log(RollNo)
        console.log(Pincode)
        console.log(City)
    }
}
let s1=new student("Rahul Sharma",147,201002,"Ghaziabad");
s1.display()