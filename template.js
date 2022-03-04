/////Choose the <template>'s content!!!!!!!
const templateElement = document.querySelector("#myTemplate");

//Step 2: make a clone///////
const myClone = templateElement.cloneNode(true);

///// Change the content/////////
myClone.querySelector("h1").textContent = "Hello";

/// STep 4 choose the new "parent" element/////
const parentElement = document.querySelector("body");

// step 5 add( append) the clone to the DOM/////
parentElement.appendChild(myClone);
