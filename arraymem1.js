const member = [
    { name : "a", money: 500 },
    { name : "b", money : 400 },
    { name : "c", money : 5200 },
    { name : "d", money : 1200 },
];
const result = member.find((member) => member.money >1000);
const result2 = member.map((member) => {return member.name});

console.log(result.name);
console.log(result2);


