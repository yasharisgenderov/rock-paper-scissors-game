var gameData = ['p','r','s']; // p hand s scissors r rock
var gameDataText = ["hand","rock","scissors"];
var p1counter = 0;
var p2counter = 0;

var player1Text = document.querySelector("#player1TextSection");
var player2Text = document.querySelector("#player2TextSection");
var player1Img = document.querySelector("#player1Image");
var player2Img = document.querySelector("#player2Image");
var player1ScorePanel = document.querySelector("#player1Score");
var player2ScorePanel = document.querySelector("#player2Score");
var player1ResultPanel = document.querySelector("#result1Game");
var player2ResultPanel = document.querySelector("#result2Game");

function randomEnemyAttackGenerator(arr){
    var randomEnemyAttackNumber = Math.floor(Math.random()*gameData.length)
    return arr[randomEnemyAttackNumber]
}

function GameStartFunction(e){
    var userAttack = e.key.toLowerCase();
    var enemyAttack = randomEnemyAttackGenerator(gameData)

    player1Img.src = `images/${userAttack}.png`;
    player2Img.src = `images/${enemyAttack}.png`;

    if(userAttack==='p'){
        player1Text.innerHTML = `Hand`
    }else if(userAttack==='r'){
        player1Text.innerHTML = `Rock`
    }else if(userAttack==='s'){
        player1Text.innerHTML = `Scissors`;
    }

    if(enemyAttack==='p'){
        player2Text.innerHTML = `Hand`
    }else if(enemyAttack==='r'){
        player2Text.innerHTML = `Rock`
    }else if(enemyAttack==='s'){
        player2Text.innerHTML = `Scissors`;
    }

    if(gameData.indexOf(userAttack)===-1){
        alert("Please insert correct button.Such as 'p,r,s' ");
    }

    if(userAttack===enemyAttack){
        console.log("DRAW");
        player1ResultPanel.innerHTML = `DRAW`;
        player2ResultPanel.innerHTML = `DRAW`;
        player1ResultPanel.setAttribute("class","h1 text-secondary")
        player2ResultPanel.setAttribute("class","h1 text-secondary")
    }

    else if(userAttack==='p' && enemyAttack==='r'){
        console.log("Player 1 WINS");
        p1counter++;
        player1ResultPanel.innerHTML = `WON`;
        player2ResultPanel.innerHTML = `LOSE`;
        player1ResultPanel.setAttribute("class","h1 text-success")
        player2ResultPanel.setAttribute("class","h1 text-danger")
        player1ScorePanel.innerHTML = `Score : ${p1counter}`
    }else if(userAttack==='s' && enemyAttack==='p'){
        console.log("Player 1 WINS");
        p1counter++;
        player1ResultPanel.innerHTML = `WON`;
        player2ResultPanel.innerHTML = `LOSE`;
        player1ResultPanel.setAttribute("class","h1 text-success")
        player2ResultPanel.setAttribute("class","h1 text-danger")
        player1ScorePanel.innerHTML = `Score : ${p1counter}`
    }else if(userAttack === 'r' && enemyAttack ==='s'){
        console.log("Player 1 WINS")
        p1counter++;
        player1ResultPanel.innerHTML = `WON`;
        player2ResultPanel.innerHTML = `LOSE`;
        player1ResultPanel.setAttribute("class","h1 text-success")
        player2ResultPanel.setAttribute("class","h1 text-danger")
        player1ScorePanel.innerHTML = `Score : ${p1counter}`
    }else{
        console.log("Player 2 WINS")
        p2counter++;
        player1ResultPanel.innerHTML = `LOSE`;
        player2ResultPanel.innerHTML = `WON`;
        player1ResultPanel.setAttribute("class","h1 text-danger")
        player2ResultPanel.setAttribute("class","h1 text-success")
        player2ScorePanel.innerHTML = `Score : ${p2counter}`
    }
}



window.onkeypress = GameStartFunction;