//    When the button is clicked, a new paragraph should be added to the div.
//The content of the paragraph should be the text entered into the input element.
//The input element's text should be cleared when the button is pressed.//


let paragraphld = 0;
document.getElementById(`p-button`).addEventListener(`click`,()=>{
let parent= document.getElementById('p-button');//I had p-div

let newElement = document.createElement(`p`);
newElement.textContent=document.getElementById(`p-input`).value; //I had id there
newElement.setAttribute(`id`, paragraphld++);

parent.appendChild(newElement);
document.getElementById(`p-input`).value=''; //changed to .value from docu.getelement
});
