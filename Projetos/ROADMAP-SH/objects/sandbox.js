let user = {
    name: "John",
    id: "3",
    age: "26",
}

let person = new Object();
    person.name = "Daniel"
    person.age = 27
    person.eyeColor = "Blue"
    person.updateAge = () => {
        return ++person.age;
    }

let person2 = {
    name: "John",
    age: 27,
    eyeColor: "Blue",
    updateAge: () => {
        return ++person2.age
    }
}

//Object Constructor ----------------------------->
    function Person(name, age, eyeColor) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        this.updateAge = () => {
            return ++this.age
        };
    }

let person01 = new Person("Daniel",17,"Blue");

console.log(person01["age"]);
person01.updateAge();
console.log(person01["age"]);

let key = "HelloWorld!";

let fruit = "Apple";
let bag = {
    [fruit] : 5,
}

