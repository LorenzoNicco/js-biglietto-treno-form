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
// richiesta chilometri
let km = document.getElementById('distance');
km = parseInt(km);

console.log('km', km, typeof km, isNaN(km));
console.log('Debug ok');

// richiesta età
let age = document.getElementById('years');
age = parseInt(age);

console.log('age', age, typeof age, isNaN(age));
console.log('Debug ok');

// prezzo biglietto
const ticketPrice = (km * 0.21).toFixed(2);

console.log('ticketPrice', ticketPrice, typeof ticketPrice, isNaN(ticketPrice));
console.log('Debug ok');

const under18Ticket = (ticketPrice * 0.8).toFixed(2);

console.log('under18Ticket', under18Ticket, typeof under18Ticket, isNaN(under18Ticket));
console.log('Debug ok');


const over65Ticket = (ticketPrice * 0.6).toFixed(2);

console.log('over65Ticket', over65Ticket, typeof over65Ticket, isNaN(over65Ticket));
console.log('Debug ok');

// generazione output
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', 
    function () {
        console.log('I dati sono stati inviati');
        
        if (age < 18) {
            console.log('Il costo del tuo biglietto è di euro' + under18Ticket);
        }
        else if (age >= 65) {
            console.log('Il costo del tuo biglietto è di euro' + over65Ticket);
        }
        else {
            console.log('Il costo del tuo biglietto è di euro' + ticketPrice);
        }
    }
);