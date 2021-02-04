function sayHello() {
    console.log('Hello');
}

function executeCallback ( callback ) {
    sayHello();
}

executeCallback(sayHello);