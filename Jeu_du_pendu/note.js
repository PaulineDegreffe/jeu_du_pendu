//Concevoir un jeu 

//1) choisir le mot au hasard
//2) Récupérer les réponses du joueur
//3) Quitter la partie quand le joueur le demande
//4) Vérifier si la lettre choisie du joueur fait partie du mot secret
//5) Enregistrer les lettres qui ont été jouées (Vrai ou fausse)
//6) Montrer au joueur ou il en est dans la partie
//7) Terminer la partie quand le joueur à deviner le mot.


// Pseudo CODE

Choisir un mot au hasard
while le mot n'a pas été deviné {
    Afficher la progression du joueur
    Récupérer un essai du joueur
    
    if le joueur veut quitter la partie {
        Quitter la partie
    }
    else if la réponse du joueur contient plus d'une lettre{
        Demander au joueur de saisir une seule lettre
    }
    else {
        if La réponse du joueur est dans le mot secret{
            Mettre à jour le tableau de réponses avec la nouvelle réponse
        }
    }
}

Féliciter le joueur pour avoir deviné le mot secret