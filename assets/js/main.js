// stampo in console i numeri da 1 a 100

// for (let number = 1; number <= 100; number++ ) {
//      console.log(number);

    
//     if (number % 3 == 0 && number % 5 == 0 ) {
//         console.log('FizzBuzz');
    
// }   else if (number % 5 == 0 ){
//         console.log('Buzz');

// }   else if (number % 3 == 0 ) {
//         console.log('Fizz');

// }

// }


for (let number = 1; number <= 100; number++ ) {
     console.log(number);

     const liElement = document.createElement ('li');
        liElement.append(number);
        document.querySelector('ul').append(liElement);

    
    if (number % 3 == 0 && number % 5 == 0 ) {    
        console.log('FizzBuzz');
        document.querySelector('li').innerHTML = 'FizzBuzz';

        
    
}   else if (number % 5 == 0 ){
        console.log('Buzz');
        

}   else if (number % 3 == 0 ) {
        console.log('Fizz');

}

}