//js file for rockPaperScissor html file

const score = JSON.parse(localStorage.getItem('score')) || {
      wins:0, 
      lose:0,
      tie:0
    };

    document.getElementById("win").textContent = score.wins;
    document.getElementById("lose").textContent = score.lose;
    document.getElementById("tie").textContent = score.tie;

    const output = localStorage.getItem('output');
    if(output){
        document.getElementById("output").innerHTML = output;
    }
    function generateComputerMove(){
        let randomNum = Math.random();
        if(randomNum < 1/3){
            return 'rock';
        }else if(randomNum <2/3 && randomNum >= 1/3){
            return 'paper';
        }else if(randomNum >= 2/3){
                 return 'scissor';
        }
    }

    function resetScore(){
        score.wins = 0;
        score.lose = 0;
        score.tie = 0;
        document.getElementById("win").textContent = score.wins;
        document.getElementById("lose").textContent = score.lose;
        document.getElementById("tie").textContent = score.tie;
        document.getElementById("output").innerHTML = "output here";
        saveScore();
    }

    function generateResult(myMove,computerMove){
        if(myMove === computerMove ){
            score.tie++;
            return 'Tie';
        }else if(
           (myMove === 'rock' && computerMove === 'paper' ) || (myMove === 'paper' && computerMove === 'scissor') || (myMove === 'scissor' && computerMove === 'rock') ){
            score.lose++;
            return 'You lose';
        }else{
            score.wins++;
            return 'You win';
        }
        
    }
  
    function playMove(myMove){
        let computerMove = generateComputerMove();
        document.getElementById("output").innerHTML =
        `your choice: <img src="../img/${myMove}-emoji.png" class="displayed-img"> <br>
        computer choice: <img src="../img/${computerMove}-emoji.png" class = "displayed-img">
        <br> ${generateResult(myMove,computerMove)}`;

        document.getElementById("win").textContent = score.wins;
        document.getElementById("lose").textContent = score.lose;
        document.getElementById("tie").textContent = score.tie;

        saveScore();

    }

    function saveScore(){
        localStorage.setItem('score',JSON.stringify(score));
        localStorage.setItem('output',document.getElementById("output").innerHTML);
    }