
let body = document.body;


let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement("h3");
let elChild3 = document.createElement("p");


let cont1 = document.querySelector(".firstContainer");

/* option1 */
let paCont1 = document.querySelector(".C1");

/* option 2 */
let npCont1 = document.querySelector(".C2");

/* buttons*/
let bt1 = document.querySelector("#H1");
let bt2 = document.querySelector("#H2");
let bt3 = document.querySelector("#H3");


let formEl = document.querySelector(".form1");
let storEl = document.querySelector(".storageDiv");


bt1.addEventListener("click", showHideTextPA);
bt2.addEventListener("click", showHideTextNoPA);

/* text input*/
function grabText() {
  let textIn;
  textIn = document.querySelector("#textIn1").value;
  if( textIn.length < 1){ alert("Write your name!"); return }

/* adding text */
  let textToAdd = document.createTextNode("Hello "+textIn+"!");
  let newP = document.createElement("P");
  newP.appendChild(textToAdd);


  let storage = document.querySelector("#storageDiv");
  storage.appendChild(newP);
}


document.querySelector(".form1").addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    grabText();
  }
});


document.querySelector("#runButton").addEventListener('click', grabText);

/*stick house option page*/
function showHideTextPA(){
  if (paCont1.hidden) {
    paCont1.hidden=false;
    formEl.hidden=true;
    storEl.hidden=true;
    cont1.hidden=true;
    npCont1.hidden=true;
    bt2.hidden=true;
    bt1.hidden=true;
    bt3.hidden=true;
    el.hidden=true;
    body.style.background="FFDAD1";



    function congratsAlert(){
      alert("The Big Bad Wolf blew your house down!");
    }
    setTimeout(congratsAlert, 3000);

  } else {
    paCont1.hidden=true;
    formEl.hidden=false;
    storEl.hidden=false;
    cont1.hidden=false;
    npCont.hidden=false;
    bt2.hidden=false;
    bt1.hidden=false;
    bt3.hidden=false;
    el.hidden=false;
  }
}

/* stick house */
function showHideTextNoPA() {
  if (npCont1.hidden) {
  npCont1.hidden=false;
  formEl.hidden=true;
  storEl.hidden=true;
  cont1.hidden=true;
  paCont1.hidden=true;
  bt1.hidden=true;
  bt2.hidden=true;
  bt3.hidden=true;
  el.hidden=true;
  body.style.background="FFDAD1";


  function congratsAlert(){
    alert("The Big Bad Wolf blew your house down!");
  }
  setTimeout(congratsAlert, 3000);

} else {
  npCont1.hidden=true;
  formEl.hidden=false;
  storEl.hidden=false;
  cont1.hidden=false;
  paCont1.hidden=false;
  bt1.hidden=false;
  bt2.hidden=false;
  bt3.hidden=false;
  el.hidden=false;
}
}

/*children */
el.appendChild(elChild);
el.appendChild(elChild2);
el.appendChild(elChild3);
body.appendChild(el);
