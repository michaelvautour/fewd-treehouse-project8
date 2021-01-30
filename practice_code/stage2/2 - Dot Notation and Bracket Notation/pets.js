const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

let prop = 'breed'
console.log(ernie.age);
console.log(ernie.breed);
ernie.bark();
// ernie(prop);