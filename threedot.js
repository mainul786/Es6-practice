const age=[12,45,12,45,12,32];
const age1=[23,54,66,32,22];
const age2=[22,55,10,12,23];
const ageAll=age.concat(age1).concat(5).concat(age2);
// spread operator
const ageAll1=[...age,...age1,...age2];
console.log(ageAll1);
console.log(ageAll);

const saman=150;
const begun=250;
const haluwa=500;
const maxnumber=Math.max(saman,begun,haluwa);
console.log(maxnumber);
const numbers=[1250,5230,5510,8585];
const maximum=Math.max(...numbers);
console.log(maximum);