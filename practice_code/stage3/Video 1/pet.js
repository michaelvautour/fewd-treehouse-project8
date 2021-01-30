class Pet {
    constructor(animal, age, breed) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
    }
}

const ernie = new Pet('dog', 2, 'pug');
const vera = new Pet('dog', 7, 'border collie');

console.log(ernie);
console.log(vera);