function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function substract(a,b){
    return a-b;
}
function divid(a,b){
    return a/b;
}

function calculator(a,b,operator){
    return operator(a,b);
    
}
console.log(calculator(5,6,add));


function HouseKeeper(name, age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
}
 var HouseKeeper1= new HouseKeeper("John",18,"male");
 var HouseKeeper2= new HouseKeeper("Angela",19,"female");
 var HouseKeeper3= new HouseKeeper("Tommy",20,"male");
console.log(HouseKeeper1);
console.log(HouseKeeper2);
console.log(HouseKeeper3);
















