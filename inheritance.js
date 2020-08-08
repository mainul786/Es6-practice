class Parent{
    constructor(){
        this.fatherName='markzukerburg';
    }
}
class Child extends Parent{
constructor(name){
    super();
this.name=name;
}
getFullname(){
   return this.name + " " + this.fatherName;
}
}
const baby=new Child("rohit");
const baby1=new Child("sonam");

console.log(baby.getFullname());
console.log(baby1.getFullname());