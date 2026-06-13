// js file for domPractice html file
 let text = '';
        function handleLiveText(){
            let input = document.querySelector(".live-text-input").value;
             text = input;
            document.querySelector(".live-text-output").textContent = text;
        }
        function handleEnterName(event){
         if(event.key === 'Enter'){
            displayName();
         }
        }
        function displayName(){
            const name = document.querySelector(".input-name").value;
            document.querySelector(".display-name").innerHTML= name;
        }
        function onKeyDownEnter(event){
            if(event.key === 'Enter'){
                displayCost();
            }
        }
        
        function displayCost(){
            let cost = Number(document.querySelector("#js-NumberInput").value);

            

            if(cost < 40 && cost >0){
                cost += 10;
            }

            document.querySelector(".js-DisplayCost").innerHTML = `Total: $${Math.round(cost*100)/100}` ;
        }
        function changeButtonText(){
           let text = document.querySelector(".js-button"); 
          if(text.textContent === 'Subscribe'){
            text.textContent = 'Subscribed';
            text.classList.add("btn-subscribed");
          }else{
            text.textContent = 'Subscribe';
            text.classList.remove("btn-subscribed");
          }
        }