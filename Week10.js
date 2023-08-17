// Below id will function as our index number for the operation.
let id = 0;

// below gets the event element using the addEventListner for when the click happens
document.getElementById("add").addEventListener("click", () => {  //event listener listens for the click to add the event when click happens
  // The following creates the varaible we will use, still not sure why this is here.
  let createdDate = new Date();
  // below gets our 'list' for the task
  let table = document.getElementById("Amount-of-pay");//This gets our amount of pay
  // below creates the row
  let row = table.insertRow(1);//creates a new row-we always want 1 because this is position 1 and we do not want it entered on 0
  // sets the attributes for ID, and Task #
  row.setAttribute("id", `task-${id}`);
  // creates the task portion of the table
  row.insertCell(0).innerHTML = document.getElementById("Tax-Amount").value;//This creates the amount of tax you pay
  // creates the date created portion of the table
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()} - ${
    createdDate.getMonth() + 1
  } - ${createdDate.getDate()}`;//This creates a calender
  // creates the start date portion of the table
  row.insertCell(2).innerHTML = document.getElementById("Date-of-pay").value;
  // creates the end date portion of the table
  //row.insertCell(3).innerHTML = document.getElementById("new-end-date").value;
  // inserts our action button in the 5th column of the table
  let actions = row.insertCell(4);// this part appends the child by calling the createDeleteButton function and feeding it the id incremented x1
  // it also will recieve a return of btn
  actions.appendChild(createDeleteButton(id++));
  // then we reset the button.
  document.getElementById("new-task").value = " ";
});

// This is the function that creates the Delete button, and it contains
// the code that deletes the element and returns the button.
function createDeleteButton(id) {
  // declares the btn variable which creates the button element
  let btn = document.createElement("button");
  // declares the classes which will apply to the button when created
  btn.className = "btn btn-primary";
  // assigns an id to the button
  btn.id = id;
  // applies the text inside the tag for the button
  btn.innerHTML = "Delete";
  // is the function for what to do when clicked.
  btn.onclick = () => {
    // consoles out the text of what task id we are deleting when clicked.
    console.log(`Deleting row with id: task-${id}`);
    // declares a value for what element we want to delete -->
    let elementToDelete = document.getElementById(`task-${id}`);
    // Then deletes it from the parent node.
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  // retuns btn to create the button again.
  return btn;
}


let category =0;
let categoryId =[];

onclick(`new-Budget-category`,() =>{
  Category.push(new Category(CategoryId++,getValue(`new-Budget-category-names`)));
  drawDOM();
});
function onclick(id, action){
  let element=document.getElementById(id);
  element.addEventListener(`click`,action);
  return element;
}
function getValue(id) {
  return document.getElementById(id).value
}
function drawDOM(){
  let categoryDiv = document.getElementById(`category`);
  clearElement(categoryDiv);
for (category of categories) {
    let table =createCategoryTable(category);
    let title =document.createElement(`h2`);
    title.innerHTML =categoy.name;
    title.appendChild(createDeleteCategoryButton(category));
    categoryDiv.appendChild(title);
    categoryDiv.appendChild(table);
    for (AmountOfPay of category.AmountOfPay){
    createAmountOfPayRow(category, table, AmountOfPay);
    }
  }
}
