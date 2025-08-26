// DOM = DOCUMENT OBJECT MODEL
//       Object() that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads the HTML docoument,
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

document.title = "banana";
document.body.style.backgroundColor = "gray";


console.dir(document);

const username = "Banana";
const welcomeMessage = document.getElementById("myH1");
welcomeMessage.textContent += username === "" ? ` Guest` : ` ${username}`;
