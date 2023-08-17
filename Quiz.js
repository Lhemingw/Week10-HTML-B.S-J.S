let paragraphld = 0;
document.getElementById('p-button').addEventListener('click',()=>{
let parent= document.getElementById('p-button');

let newElement = document.createElement('p');
newElement.id=document.getElementById('p-input').value;
newElement.setAttribute('id', paragraphld++);

parent.appendChild(newElement);
document.getElementById('p-input').value=''; //changed to .value from docu.getelement
});
