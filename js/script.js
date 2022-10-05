/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

//dati da richiedere all'utente 
//Nome
const userName = prompt("Qual'è il tuo nome?");
console.log(userName , typeof  userName );
//Cognome
const userLastName = prompt ("Qual'è il tuo cognome?")
console.log(userLastName , typeof userLastName);
//Colore Preferito 
const favoritColor = prompt ( "Qual'è il tuo colore preferito");
console.log(favoritColor ,typeof favoritColor);

//Elaborazione
const resultPassword = "La tua password è " + userName + userLastName + favoritColor + 21;
console.log(resultPassword);

//Output 
document.getElementById("passwordrandom").innerHTML=resultPassword;