class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    get activity() {
        const today = new Date();
        const hour = today.getHours();
        
        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
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

console.log(ernie.activity);