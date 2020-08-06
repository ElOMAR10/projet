var solde = 100;
var perte = 0;
function joue() {
  var perdu = false;
  var pari = document.getElementById("select").value;
  var mise = parseInt(document.getElementById("mise").value);

  if (solde == 0) {
    alert("Votre solde est insuffisant");
  } else if (mise > solde) {
    alert("La somme misée est supérieure à celle de votre solde");
  } else {
    var gain = 0;
    solde -= mise;

    var resultat = Math.round(Math.random() * 36);

    if (resultat == 0) {
      perdu = true;
    } else if (resultat == pari) {
      gain = mise + mise * 35;
    } else if (
      (pari == "Pair" && resultat % 2 == 0) ||
      (pari == "Impair" && resultat % 2 != 0)
    ) {
      gain = mise + mise;
    } else {
      perdu = true;
    }

    if (perdu) {
      alert(
        "Le nombre gagnant est  " +
          resultat +
          "\nVous venez de perdre  " +
          mise +" 000 fr"
      );
      perte = perte + mise; 
    } else {
      alert(
        "  Le nombre gagnant est  : " + resultat + "\nVous avez gagné : " + gain+" 000 fr"
      );
      solde += gain;
    }

    document.getElementById("solde").value = solde;
    document.getElementById("perte").value = perte;

  }
}
