// ------- EXAMPLE 1 <h1> -----------

// STEP 1 CREATE THE ELEMENT
//const newH1 = document.createElement("h1");

// STEP 2 ADD ATRIBUTES/PROPERTIES
//newH1.textContent = "I like pizza";
//newH1.id = "myH1";
//newH1.style.color = "tomato";
//newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM

//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").prepend(newH1);
//document.body.insertBefore(newH1, document.getElementById("box2"));

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[0]);

// REMOVE HTML ELEMENT

//document.body.append(newH1);
//document.getElementById("box1").append(newH1);

//document.getElementById("box1").removeChild(newH1);



// ------- EXAMPLE 2 <li> -----------

// STEP 1 CREATE THE ELEMENT

const newLi = document.createElement("li");

// STEP 2 ADD ATRIBUTES/PROPERTIES

newLi.textContent = "Coconut";
newLi.id = "coconut";
newLi.style.backgroundColor = "lime";

// STEP 3 APPEND ELEMENT TO DOM

//document.getElementById("fruits").append(newLi);

document.getElementById("fruits").insertBefore(newLi, document.getElementById("orange"));

const listItems = document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newLi, listItems[1]);

document.getElementById("fruits").removeChild(newLi);


