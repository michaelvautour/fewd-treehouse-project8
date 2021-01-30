class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    speak() {
        console.log(this.sound);
    }

}

const ernie = new Pet('dog', 2, 'pug', 'yip yip');
const vera = new Pet('dog', 7, 'border collie', 'woof woof');

console.log(ernie);
console.log(vera);

ernie.speak();
vera.speak();