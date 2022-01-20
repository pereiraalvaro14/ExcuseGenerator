/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");

  let who = [
    "Mi perro",
    "Mi jefe",
    "Mi ex",
    "Mi hermana",
    "Mi mama",
    "Mi primo",
    "Un extraterrestre"
  ];

  let what = [
    "se comio la tarea",
    "me quemo los zapatos",
    "me corto un brazo y me agarraron 10 puntos",
    "me boto el pasaporte",
    "me choco el carro",
    "me quito la cartera con los documentos"
  ];
  let when = [
    "esta mañana",
    "justamente cuando iba saliendo",
    "durante la noche el dia antes de clases",
    "1 hora antes de clases",
    "hace 5 minutos",
    "el fin de semana"
  ];

  let numberwho = Math.floor(Math.random() * who.length);
  console.log(numberwho);

  let numberwhat = Math.floor(Math.random() * what.length);
  console.log(numberwhat);

  let numberwhen = Math.floor(Math.random() * when.length);
  console.log(numberwhen);

  let excusa = `No me lo vas a creer pero...${who[numberwho]} ${what[numberwhat]} ${when[numberwhen]}`;
  document.querySelector("#excuse").innerHTML = excusa;
};
