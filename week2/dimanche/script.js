// Un commentaire sur une seule ligne

/* Un commentaire 
sur plusieurs
lignes
*/

// Déclaration de variable (avec 'var' et 'let')
var a;
let b;

// Déclaration de variable + affectation
let c=20;
let d=10;

const a = 3.14; // Création d'une variable constante
a = 6.28;       // Impossible : a ne peut pas changer de valeur !

// Déclaration de constante + affectation
const e=50;
const text="La différence entre deux nombre est: ";

// 'alert' permet d'afficher un box avec un message
alert("Bonjour !");

// 'prompt' permet de saisir un message
prompt("Entrez votre prénom :");

// 'console' permet d'afficher 
console.log(a);

// Opération entre deux variable
let somme= c-d;

a+=5;

// Concaténation
alert(text + somme);

// Condition 'if'
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}

// Condition 'if else'
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else { // nombre <= 0
  if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else { // nombre === 0
    console.log(nombre + " est nul");
  }
}