// Lista Cognomi
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


var surnameArray =["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

var getElement = document.getElementById("addElement")

// ADD A MEMBER TO THE LIST

getElement.addEventListener("click", function(){

  // al click inserisce nell'Array il cognome inserito
  var element =document.getElementById("element").value
  surnameArray.push(element);

  //check
  console.log(surnameArray)

  // Ordina alfabeticamente l'array
  surnameArray.sort()

  //check
  console.log(surnameArray)

  // resetta la lista sull'HTML in caso ci sia una lista precedente (refresh)
  document.getElementById("surnameList").innerHTML =""

  // Stampa una lista HTML con ogni elemento dell'array
  for(var i = 0; i < surnameArray.length; i++){

    document.getElementById("surnameList").innerHTML += "<li>" + surnameArray[i] + "</li>"
  }

    // calcola la posizione del nuovo elemento inserito nell'Array
    var elementPosition = surnameArray.indexOf(element) + 1

    //check
    console.log(elementPosition)

  // stampa nell'HTML in quale posizione della LISTA si trova l'elemento inserito

  document.getElementById("surnamePosition").innerHTML = "L'elemento inserito si trova in posizione: " + elementPosition

  //svuota l'input Text
  document.getElementById("element").value="";

})
