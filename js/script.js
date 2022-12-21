/*
    1. Inizio
    2. Chiedere all'utente quanti chilometri vuole percorrere
    3. Ciedere all'utente quanti anni ha
    4. Calcolare il prezzo del biglietto
        4.1 0.21 euro al chilometro
        4.2 Sconto del 20% per under 18
        4.3 Sconto del 40% per over 65

    MILESTONE 1
        Due input e un bottone non stilizzati con label sopra. Output in console

    MILESTONE 2
        1. L'utente può inserire i dati e visualizzare il calcolo finale con il prezzo.
        2. Recap dei dati e output del prezzo finale stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/

// MILESTONE 1
// // richiesta chilometri
// let km = document.getElementById('distance');

// console.log('Debug ok');


// // richiesta età
// let age = document.getElementById('years');

// console.log('Debug ok');


// // generazione output
// const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', 
//     function () {
//         km = parseInt(km.value);

//         console.log('km', km, typeof km, isNaN(km));

//         age = parseInt(age.value);

//         console.log('age', age, typeof age, isNaN(age));

//         console.log('I dati sono stati inviati');

//         const ticketPrice = (km * 0.21).toFixed(2);

//         console.log('ticketPrice', ticketPrice, typeof ticketPrice, isNaN(ticketPrice));
//         console.log('Debug ok');

//         if (age < 18) {
//             const under18Ticket = (ticketPrice * 0.8).toFixed(2);

//             console.log('under18Ticket', under18Ticket, typeof under18Ticket, isNaN(under18Ticket));
//             console.log('Debug ok');

//             console.log('Il costo del tuo biglietto è di euro ' + under18Ticket);
//         }
//         else if (age >= 65) {
//             const over65Ticket = (ticketPrice * 0.6).toFixed(2);

//             console.log('over65Ticket', over65Ticket, typeof over65Ticket, isNaN(over65Ticket));
//             console.log('Debug ok');

//             console.log('Il costo del tuo biglietto è di euro ' + over65Ticket);
//         }
//         else {
//             console.log('Il costo del tuo biglietto è di euro ' + ticketPrice);
//         }
//     }
// );

// MILESTONE 2
// richiesta nome
const identity = document.getElementById('username');


console.log('Debug ok');

// richiesta chilometri
let km = document.getElementById('distance');

console.log('Debug ok');


// richiesta età
let age = document.getElementById('years');

console.log('Debug ok');


// generazione output
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', 
    function () {
        document.getElementById('ticket-result').style.display = 'block';

        document.getElementById('fill-name').innerHTML = identity.value;

        console.log('identity', identity, typeof identity);
        
        const ticketPrice = parseInt((km.value * 0.21).toFixed(2));

        console.log('ticketPrice', ticketPrice, typeof ticketPrice, isNaN(ticketPrice));
        console.log('Debug ok');

        if (age.value == 'minorenne') {
            const under18Ticket = (ticketPrice * 0.8).toFixed(2);

            document.getElementById('offer').innerHTML = 'Biglietto young';

            document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;

            document.getElementById('code').innerHTML = Math.floor(Math.random() * (9999 - 9000 + 1) ) + 9000;

            document.getElementById('price').innerHTML = 'euro ' + under18Ticket;

            console.log('under18Ticket', under18Ticket, typeof under18Ticket, isNaN(under18Ticket));
            console.log('Debug ok');

            console.log('Il costo del tuo biglietto è di euro ' + under18Ticket);
        }
        else if (age.value == 'silver') {
            const over65Ticket = (ticketPrice * 0.6).toFixed(2);

            document.getElementById('offer').innerHTML = 'Biglietto Silver';

            document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;

            document.getElementById('code').innerHTML = Math.floor(Math.random() * (9999 - 9000 + 1) ) + 9000;

            document.getElementById('price').innerHTML = 'euro ' + over65Ticket;

            console.log('over65Ticket', over65Ticket, typeof over65Ticket, isNaN(over65Ticket));
            console.log('Debug ok');

            console.log('Il costo del tuo biglietto è di euro ' + over65Ticket);
        }
        else {
            document.getElementById('offer').innerHTML = 'Biglietto Standard';

            document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;

            document.getElementById('code').innerHTML = Math.floor(Math.random() * (9999 - 9000 + 1) ) + 9000;

            document.getElementById('price').innerHTML = 'euro ' + ticketPrice;

            console.log('Il costo del tuo biglietto è di euro ' + ticketPrice);
        }
    }
);

const cancelButton = document.getElementById('cancel-button');

cancelButton.addEventListener('click', 
    function () {
        window.location.reload();
    }
);