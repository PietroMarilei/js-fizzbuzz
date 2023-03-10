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


for (let number = 1; number <= 100; number++) {
        console.log(number);

        const liElement = document.createElement('li');
        liElement.innerHTML = number;


        if (number % 3 == 0 && number % 5 == 0) {
                console.log('FizzBuzz');
                liElement.innerHTML = 'FizzBuzz';
                liElement.classList.add('bg-warning', 'fw-bold', 'text-danger');



        } else if (number % 5 == 0) {
                console.log('Buzz');
                liElement.innerHTML = 'Buzz';
                liElement.classList.add('bg-danger', 'fw-bold');


        } else if (number % 3 == 0) {
                console.log('Fizz');
                liElement.innerHTML = 'Fizz';
                liElement.classList.add('bg-success', 'fw-bold', 'text-warning');


        }

        document.querySelector('ul').append(liElement);

}