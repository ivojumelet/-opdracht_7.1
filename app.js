
var productPrijs = parseFloat(prompt("Hoeveel kost het product dat je wilt kopen?"));


if (isNaN(productPrijs)) {
  alert("Voer een geldig bedrag in.");
} else {

  var beschikbaarGeld = parseFloat(prompt("Hoeveel geld heb je?"));

  
  if (isNaN(beschikbaarGeld)) {
    alert("Voer een geldig bedrag in.");
  } else {
    if (beschikbaarGeld >= productPrijs) {
      alert("Je hebt genoeg geld om het product te kopen!");
    } else {
      alert("Sorry, je hebt niet genoeg geld om het product te kopen.");
    }
  }
}

