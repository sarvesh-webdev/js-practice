//js file for parctice2 html file

  const button = document.querySelector(".Gaming-btn");
  const gamingBtn2 = document.querySelector(".Gaming-btn2");
  const musicBtn = document.querySelector(".music-btn");
  const techBtn = document.querySelector(".tech-btn");
  
  button.addEventListener("click",onClickChangeColor);
  //have not learn this property yet just trying out
   
  gamingBtn2.addEventListener("click",onlyOneButtonChangeColor); 
  musicBtn.addEventListener("click",onlyOneButtonChangeColor); techBtn.addEventListener("click",onlyOneButtonChangeColor); 

   

  function onClickChangeColor(){
 
   if(! button.classList.contains("js-button")){
     button.classList.add("js-button");
   }else{
    button.classList.remove("js-button");
   }
  }
  function onlyOneButtonChangeColor(event){
    musicBtn.classList.remove("js-button");   
    gamingBtn2.classList.remove("js-button");
    techBtn.classList.remove("js-button");
    
    event.currentTarget.classList.add("js-button");

  } 