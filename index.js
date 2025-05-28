// Initialisation des compteurs
let nbCaracteres = 0;
let nbMots = 0;
let nbVoyelles = 0;

// Lecture de la phrase (on peut demander à l'utilisateur)
let phrase = prompt("Saisis une phrase qui se termine par un point :");

// Sécurité : si la phrase ne se termine pas par un point, on l'ajoute
if (phrase.charAt(phrase.length - 1) !== ".") {
  phrase += ".";
}

// Définir les voyelles
let voyelles = "aeiouyAEIOUY";

// Parcourir la phrase caractère par caractère
for (let i = 0; i < phrase.length; i++) {
  let c = phrase[i];
  nbCaracteres++;

  // Si c'est une voyelle
  if (voyelles.includes(c)) {
    nbVoyelles++;
  }

  // Si c'est un espace, on compte un mot
  if (c === " ") {
    nbMots++;
  }
}

// Ajouter le dernier mot (après le dernier espace, avant le point)
nbMots++;

// Affichage des résultats
console.log("Longueur de la phrase : " + nbCaracteres);
console.log("Nombre de mots : " + nbMots);
console.log("Nombre de voyelles : " + nbVoyelles);

// tri par insertion
function triParInsertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // L'élément à insérer
    let j = i - 1;

    // Décale les éléments supérieurs à current vers la droite
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place current à sa bonne position
    arr[j + 1] = current;
  }

  return arr;
}

// Exemple d'utilisation
let tableau = [5, 2, 9, 1, 3];
console.log("Avant tri :", tableau);
console.log("Après tri :", triParInsertion(tableau));
