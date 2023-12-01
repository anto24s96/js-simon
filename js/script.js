//RECUPERO GLI ELEMENTI DAL DOM
const numbers_list = document.getElementById("numbers_list");
const original_numbers = document.getElementById("original_numbers")
const your_numbers = document.getElementById("your_numbers");
const your_points = document.getElementById("points");


let five_numbers = [];
let guessNumber;
let guessNumberArray = [];
let correctNumberArray = [];
let score = 0;

//CREO LA FUNZIONE CHE MI GENERA UN NUMERO CASUALE
function randomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

//VISUALIZZO A PAGINA I 5 NUMERI RANDOMICI
for (let i = 0; i < 5; i++) {
    five_numbers.push(randomNumber());

    let li = document.createElement("li");
    li.innerHTML = five_numbers[i];
    numbers_list.append(li);
}

//DOPO 30 SECONDI I NUMERI SPARISCONO
setTimeout(function () {
    numbers_list.style.display = "none";
}, 10000);

//PERMETTERE ALL'UTENTE DI INSERIRE I NUMERI CHE HA VISTO
setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        guessNumber = parseInt(prompt("Inserisci i numeri che hai visto."));
        guessNumberArray.push(guessNumber);

        while (isNaN(guessNumber)) {
            alert("Devi inserire un numero!");
            guessNumber = parseInt(prompt("Inserisci i numeri che hai visto."));
            guessNumberArray.push(guessNumber);
        }
        //VERIFICARE QUALI E QUANTI NUMERI DA INDOVINARE SONO STATI INSERITI CORRETTAMENTE
        setTimeout(function () {
            if (five_numbers.includes(guessNumberArray[i])) {
                correctNumberArray.push(guessNumberArray[i]);

                console.log(`Hai indovinato il numero: ${guessNumberArray[i]}`);

                //CREAZIONE DEL PUNTEGGIO
                score++
                your_points.innerHTML = `Il tuo punteggio: ${score}`;

            }
            else {
                console.log(`Il numero ${guessNumberArray[i]} è sbagliato`);
            }

            original_numbers.innerHTML = `I numeri corretti erano: ${five_numbers}`;

            your_numbers.innerHTML = `I numeri che hai inserito: ${guessNumberArray}`

        }, 12000);
    }
    console.log(guessNumberArray)


}, 11000);



























