/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
//image
var myImage = new Image(661, 960);
myImage.src = "1bday.jpg"

//body
let body = document.body;
body.innerText = "";
body.style.padding="20px";
body.style.margin="40px";
body.style.backgroundImage= 'url(https://media.giphy.com/media/d3YIZN2F3TsQ9TH2/giphy.gif)'

//element
let e = document.createElement("div");

// element children
let e1 = document.createElement("h1");
let e2 = document.createElement("h2");
let e3 = document.createElement("p");
let e4 = document.createElement("p");
let e5 = document.createElement("a");

e1.innerText = "Summer Mixon Photography";
e2.innerText = "Happy Birthday Lincoln!"
e3.innerText = "Recently my son turned one! I love phot0graphy, I am learning studio (indoor) photography until the weather is go outside-able."
e4.innerText = "As you can see in the picture below, my homemade setup :)";
e5.innerText = " To Summer Mixon Photgraphy FB Page";

e.setAttribute("style", "text-align: center");
e1.setAttribute("style","padding:0.5em; margin:0; font-family: sans-serif; text-align:center; color:#FFFFFF");
e2.setAttribute("style","padding:1em; margin:0; font-weight: normal; font-family: sans-serif; text-align:center; color:#FFFFFF");
e3.setAttribute("style","padding:2em; margin:0; font-family: sans-serif; text-align:center; color:#FFFFFF");
e4.setAttribute("style","padding:0em; margin:0; font-family: sans-serif; text-align:center; color:#FFFFFF");
e5.setAttribute("href", "https://www.facebook.com/summixphoto/");
e5.setAttribute("style","padding:0em; margin:0; font-family: sans-serif; text-align:center; color:#FFFFFF");


myImage.setAttribute("style", "padding:0em; margin:100px");

e.appendChild(e1);
e.appendChild(e5);
e.appendChild(e2);
e.appendChild(e3);
e.appendChild(e4);
e.appendChild(myImage);


body.appendChild(e);
