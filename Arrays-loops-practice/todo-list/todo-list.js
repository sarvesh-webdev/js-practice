// js file for todo list html file
const todoList = JSON.parse(localStorage.getItem('todoList')) || [] ;
renderTodoList();
 const addButton = document.querySelector(".add-button");
 addButton.addEventListener("click",takeValueFromInput);
 document.body.addEventListener("keydown",keyDownEnter);   

function keyDownEnter(event){
if(event.key === 'Enter'){
      takeValueFromInput();
   }
}
function takeValueFromInput(){
   const inputElement = document.querySelector(".js-todo-input");
   const inputDateElement = document.querySelector(".js-todo-date-input");
   const todoDate = inputDateElement.value;
   const todoValue = inputElement.value;
   
    if(!todoValue){
      alert('please input data');
    }else{ 
    const todoObject = {
    todoValue,
    todoDate

   };
   todoList.push(todoObject);
   localStorage.setItem('todoList',JSON.stringify(todoList));
   inputElement.value = '';
   inputDateElement.value = '';
   renderTodoList();
}
  
}

function renderTodoList(){
    let result= '';
    for(let i =0;i<todoList.length;i++){
       let listElement = todoList[i]; 
      result += `<div>${listElement.todoValue}</div><div>${listElement.todoDate}</div>
      <div><button class ="js-delete-btn delete-btn" >Delete</button></div> `;
    
    }
     document.querySelector(".result").innerHTML = result;

     document.querySelectorAll(".js-delete-btn").forEach(
      (deleteButton,index)=>{
         deleteButton.addEventListener("click",()=>{
         todoList.splice(index,1);
         localStorage.setItem('todoList',JSON.stringify(todoList));
         renderTodoList();
      })
      });
}



