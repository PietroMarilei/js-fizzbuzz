// stampo in console i numeri da 1 a 100

for (let number = 1; number <= 100; number++ ) {
     console.log(number);

    
    if (number % 3 == 0 ) {
        console.log('Fizz');
    
}   else if (number % 5 == 0 ){
        console.log('Buzz');

}   else if (number % 3 == 0 && number % 5 == 0) {
        console.log('FizzBuzz');

}

}


