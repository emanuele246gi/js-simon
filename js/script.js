// Descrizione:
// Un alert() espone 5 numeri generati casualmente.


for (var i = 0; i < 5; i ++){
    random= Math.floor(Math.random() * 5 + 1);
    alert (random);
}

// Da li parte un timer di 30 secondi.

var timer = 0;
var clock;

function cronometro (){

    clock = setInterval(function(){
        document.getElementById('cronometro').innerHTML = ++timer;     
    }, 1000);

};

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

if (timer == 30){
    var prompt = parseInt(prompt('Inserisci i numeri visti precedentemente'));
}

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

