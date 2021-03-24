var nom = prompt("Quel est ton nom ?");
alert("Bonjour " + nom);

//Choisir un mot au hasard

var mots = [
    "javascript",
    "singe",
    "extraordinaire",
    "pancake"
]

var motSecret = mots[Math.floor(Math.random() * mots.length)]; //mot[1]
//voir CHP 3 du livre pour comprendre les commandes sur les maths. 

var lettreMotSecret = motSecret;
// Création du tableau de réponses
var tableauReponses = [];
for (var i = 0; i < motSecret.length; i++) {
    tableauReponses[i] = "_";
}

var nombrelettresManquantes = motSecret.length; 

//Coder la boucle du jeu
while (nombrelettresManquantes > 0) {
    //le code du jeu est affcihé ici
    //Afficher la progression du joueur
    //Mettre à jour tableauRéponses et lettresManquantes à chaque essai correcte
    //Récupérer un essai du joueur
    //Afficher la progression du joueur

    alert(tableauReponses.join(" "));

    //récupérer un essai joueur
    var reponse = prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.");
    if (reponse === null) {
     break;
    } else if (reponse.length !==1) {
    alert("Tu dois saisir qu'une seule lettre.");
    } else {
    //Mettre à jour l'état du jeu avec la nouvelle réponse
    // for (var j = 0; j < motSecret.length; j++) {
    //     if (lettreMotSecret[j] === reponse) {
    //         tableauReponses[j] = reponse;
    //         nombrelettresManquantes--;
    //         }
    //     }

        for (var j = 0; j < motSecret.length; j++) {
            if (lettreMotSecret[j] === reponse) {
                if(tableauReponses[j] === "_") {
                    tableauReponses[j] = reponse;
                    nombrelettresManquantes--;
                }
  
                }
            }
    }
}




//Terminer la partie
alert(tableauReponses.join(" "));
alert("Félicitations ! Le mot secret est " + motSecret)
