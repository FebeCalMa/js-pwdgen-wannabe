console.log("JS OK!");

/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina e/o in console nomecognomecolorepreferito21
*/

//Variabili da chiedere
//const nome;
//const cognome;
//const colore preferito;

//Chiedere nome
const nome = prompt("Qual'è il tuo nome?");
//console.log(nome);

//Chiedere il cognome
const cognome = prompt("Qual'è il tuo cognome?");
//console.log(cognome);

//Chiedere colore preferito
const colorePreferito = prompt("Qual'è il tuo colore preferito?");
//console.log(colorePreferito);

//Numero 21
const numero = 21;
//console.log(numero);

//Password Creator
const password = nome + cognome + colorePreferito + numero;
//pagina
document.getElementById("password-generated").innerHTML =
  "La tua password è:" + " " + password;
//console
console.log(
  (document.getElementById("password-generated").innerHTML =
    "La tua password è:" + " " + password)
);
