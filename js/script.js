// Descrizione:
// Un alert() espone 5 numeri generati casualmente.

var randomNumbers = [];
var numeri = 5;

while(randomNumbers.length < 5){
    var numeroRandom = numeriRandom(1,100);
    console.log(numeroRandom);

    if(!randomNumbers.includes(numeroRandom)){
        randomNumbers.push(numeroRandom);
    }

}

console.log(randomNumbers);

alert(randomNumbers);

function numeriRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Da li parte un timer di 30 secondi.

setTimeout(inserisciNumeri, 3000);

function inserisciNumeri(){

    var risultato = indovinaNumeri(randomNumbers);
    console.log(risultato);

    if(risultato.length == 0){
        console.log('Non hai indovinato alcun numero');
    } else {
        console.log('hai indovinato ' + risultato.length + ' numeri e sono: ' + risultato);
    }
}

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

function indovinaNumeri(arrayRandom){
    var users = [];
    for (var i = 0; i < 5; i ++){
        var numeroUtente = parseInt(prompt('Digita un numero'));

        if(arrayRandom.includes (numeroRandom) && !users.includes(numeroUtente)){
            users.push(numeroUtente);
        }

    }
    return users;

}

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function numeriRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
