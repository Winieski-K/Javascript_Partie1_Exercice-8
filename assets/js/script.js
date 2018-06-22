function displayResult() {
  // Déclaration de la variable
  var age = document.getElementById('age').value;
  var regex = /^[\d]+$/;
  // Vérification du champ
  if(regex.test(age) && age < 130 && age > 0){
    //Vérification de l'age puis affichage de celui-ci
    if(age >= 18){
      // Affiche le message Vous êtes majeur
      alert("Vous êtes majeur");
    } else {
        // Affiche le message Vous êtes mineur
        alert("Vous êtes mineur");
      }
    } else {
      // Affiche un message en cas de mauvais input
      alert("Enter a valid number");
    }
  }
