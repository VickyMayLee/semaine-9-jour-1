// Fonctionnalité 1 :

// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇



// var footer1 = document.querySelector("footer");

// footer1.addEventListener('click', msg1);

// function msg1() {

//     console.log("clique");


//   }

// Fonctionnalité 1-bis :

//lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

var i = 1;

var footer1 = document.querySelector("footer");

footer1.addEventListener('click', msg1);

//Fonction qui affiche le mot "clique" en console.

function msg1() {

    console.log(`clic numéro ${i}`);

    i++;

}




// Fonctionnalité 2 :

let myNavbar = document.getElementById('navbarHeader');

let button = document.getElementsByTagName('button');



button[0].addEventListener('click', function(){

  myNavbar.classList.toggle('collapse')

});







//fonctionnalité 3 

// let editButton = document.getElementsByClassName("btn-sm btn-outline-secondary")[0];

// editButton.addEventListener("click", redEdit);

// function redEdit() {

//     let element = document.querySelector("p.card-text");

//     element.classList.toggle("text-danger");

// }



let card = document.getElementsByClassName("card-body")[0];

function changeColor (){

    card.getElementsByTagName("p")[0].style.color = 'red' ;

}



card.addEventListener ("click", changeColor)







//fonctionnalité 4

let secondCard = document.getElementsByClassName("card-body")[1];

let editButton2 = document.getElementsByClassName("btn-sm btn-outline-secondary")[1];

editButton2.addEventListener("click", greenEdit);

function greenEdit() {

    let element2 = document.querySelectorAll("p.card-text")[1];

    element2.classList.toggle("text-success");

}





//Fonctionnalité 5

// ('link[rel=stylesheet]')[0].disabled=true;


var navbar = document.getElementById('navbarHeader');

  navbar.ondblclick = function nolink(){
    document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
    addEventListener ('dbclick', nolink)
  }
// //Fonctionnalité 6





//Fonctionnalité 7





//Fonctionnalité 8