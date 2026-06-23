// js file for todo list practice html file

const todoList = [];
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
   const todoValue = inputElement.value;
   todoList.push(todoValue);
   inputElement.value = '';
   renderTodoList();

}

function renderTodoList(){
    let result= '';
    for(let i =0;i<todoList.length;i++){
       let listElement = todoList[i]; 
      result += ` <p> ${listElement}</p>`;
     document.querySelector(".result").innerHTML = result
     ;
    }
}
// just basic js practice
/*
const nums = [10,20,30];
console.log(nums);
for(let i=0;i<nums.length;i++){
   if(i===nums.length-1){
      nums.splice(i,1);
      nums.push(99);
   }
}
setTimeout(function display(){
   console.log(nums);
},4000);
const num2 = [10,20,30,40,50];
const arr = ['hello','guck you','take it forward',{name:'sarvesh',place:'chandrapur'}];
console.log(num2,arr);


function getLastArray(array){
console.log(array[array.length -1]);
}

function arraySwap(array){
const firstElement = array[0];
array[0] = array[array.length-1];
array[array.length-1] = firstElement;
console.log(array);
}

for(let i=0;i<=10;i++){
   if(i%2 === 0){
      continue;
   }
   console.log(i);
}
let i =0;

while(i<10){
   if(i%2==0){
      i++;
      continue;
   }
console.log(i);
i++;
}

const array = [10,20,30];
console.log(array);
function add2Array(array,array2){
 let totalArray = [];
   for(let i=0;i<array.length;i++){
      if(array[i] === null){
        totalArray[i] = array2[i];
      }else if(array2[i] === null){
         totalArray[i] = array[i];
      }else{ totalArray[i] = array[i] + array2[i];}
  
}
console.log(totalArray);} 

function minMax(array){
   let min = array[0];
   let max = array[0];
 for(let i =0;i<array.length;i++){
    if(array[i] < min){
      min = array[i];
    }else if(max < array[i]){
      max = array[i];
    }
 }
 console.log(`min:${min} max:${max}`);
}*/