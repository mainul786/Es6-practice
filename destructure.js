// destructue of string
const person={name:'shilpi',age:24,bfName:'Rajib',address:'char sofihajir Para',friendsName:['rahul','sumon','sagir'],phone:7001261273}
console.log(person.name);

const {bfName,name}=person;
console.log(bfName,name);

// destructure of array
const friendsName=['rahul','sonam','sakib khan','amir khan','ajay devgan'];
const [chotoFriend,nextFriend,...bakisob]=friendsName;
console.log(chotoFriend,nextFriend);
console.log(bakisob);

//complex Object
const complexobject={
    name:'rohit',
    info:{
        address:'charlaban gola',
        phoneNumber:7001261273
    }
}
const {phoneNumber}=complexobject.info;
console.log(phoneNumber);
