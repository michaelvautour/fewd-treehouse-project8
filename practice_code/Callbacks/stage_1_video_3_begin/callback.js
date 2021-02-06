function sayHello() {
    console.log('Hello World');
}

function executeCallback ( callback ) {
    sayHello();
}

executeCallback(sayHello);