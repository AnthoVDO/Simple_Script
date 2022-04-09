//Select all elements for a page
let elements = document.querySelectorAll("*");
//Make order to remove script, meta, css
let arrElements = [];
let arrElementsToAvoir = ["SCRIPT", "META", "CSS", "HTML", "STYLE", "BODY", "NOSCRIPT", ];
elements.forEach(e=>{ if(!arrElementsToAvoir.includes(e.nodeName)){
    arrElements.push(e);
}} );
//Check elements inside 
arrElements.forEach(e=>console.log(e.innerText));
// //Make the change
// let wordTochange = /SAP/igm;
// let newWord = "Odoo";
// arrElements.forEach(e=>e.innerText = e.innerText.replace(wordTochange, newWord));