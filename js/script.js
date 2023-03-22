/*
1. Selezionare il container 
2.Ad ogni ciclo creare un nuovo div 
3. Dare la classe box
4. se è pari il bg è giallo
5. Scrivere il numero nel box 
6. Aggiungere il box al container 


*/

//1.
const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++){


  const box= document.createElement("div")

  box.classList.add("box")

  //SE IL NUMERO è SIA MULTIPLO DI 3 CHE DI 5 ( ci ho messo un po' a capire che andava messo prima)
  if(!(i % 3) && !(i % 5)) {
    box.classList.add('fizzbuzz');
  }

  //SE IL NUMERO è MULTIPLO SOLO DI 3
  else if(!(i % 3)){
    box.classList.add('fizz');
  }
  
  //SE IL NUMERO è MULTIPLO SOLO DI 5
  else if(!(i % 5)){
    box.classList.add('buzz');
  }
  
  //SE IL NUMERO NON è MULTIPLO NE DI 3 NE DI 5
  else {
    box.append(i);
  }

  container.append(box);

}



