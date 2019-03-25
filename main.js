console.log("Hi, my name is Chris and I'm 29 years old");
function createGreeting(){
    console.log("Hi, my name is Chris and I'm 29 years old");
}
function createGreeting(){
    return "Hi, my name is Chris and I'm 29 years old";
}
function createGreeting(name,age){
    return "Hi, my name is "+name+"and I'm "+age+"years old";
}
function createGreeting(name,age){
    const yearOfBirth = 2019-age;
    return 'I was born in '+yearOfBirth;
}
function getYearOfBirth(age){
    return 2019-age;
}
function createGreeting(name,age){
    const yob=getYearOfBirth(age);
    return 'I was born in '+yob;
}