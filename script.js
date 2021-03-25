/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while */
/* var volte = 5;
var somma = 0; 
 for(var i = 1; i <= volte; i++) {
    var numero = parseInt(prompt('Inserisci un numero'+ i + ' di '+ volte));
    console.log(numero); 
    somma += numero;
    
}
console.log(somma); 
 */
/* var counter = 1;
while(counter <= volte){
    var numero = parseInt(prompt('Inserisci un numero'+ counter + ' di '+ volte));
    console.log(numero);
    somma += numero;
    counter++; 
}
console.log(somma); */

//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
/* var numero = parseInt(prompt('Inserisci un numero'));
if(numero % 2 ===0){
    console.log(numero);
}
else{
    console.log(numero + 1);
} */

/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
Gatsby vuole generare una falsa lista di 3 invitati. */
/* var nome =['Luca', 'Paolo', 'Davide', 'Ivan'];
console.log(nome);
var cognome = ['Rossi', 'Verdi', 'Neri', 'Bianchi'];
console.log(cognome);
var NomeCognome = [];
for (var i = 0; i < 3; i++){
    //generare index per i nomi
    var NomeRandomIndex = Math.floor(Math.random() * nome.length);
    console.log(NomeRandomIndex);
    //generare index per i cognomi
    var CognomeRandomIndex = Math.floor(Math.random() * cognome.length);
    console.log(CognomeRandomIndex);
    //generare le combinazioni di nomi e cognomi
    var NomeCognome1 = nome[NomeRandomIndex] + ' ' + cognome[CognomeRandomIndex];
    NomeCognome.push(NomeCognome1);
}
console.log(NomeCognome); */




//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
/* var numeri = [ 1, 2, 3, 4, 5, 6]
console.log(numeri);
var somma = 0;
for( var i = 0; i < numeri.length; i++){

    if( i % 2 !== 0){
        somma = somma + numeri[i];
    }
    
}
console.log(somma); */