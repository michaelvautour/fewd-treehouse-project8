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
//update object literal using bracket notation
ernie['age'] = 2;

//add a property to existing object literal using dot notation
ernie.color = 'black';
console.log(ernie);