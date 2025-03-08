let curMoleTile;
let curPlantTile;
let score = 0;
let gameOver=false;

window.onload=function(){
    setGame();
}

function setGame(){
    //set up the grid for the game board in html
    for(let i =0; i < 9 ; i++){
        //<div id='0-8'></div>
        let tile = document.createElement("div");
        tile.id= i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);
    setInterval(setPlant,2000);
}

function randomNum(){
   let num= Math.floor(Math.random()*9).toString();
   return num;
}

function setMole(){
    if(gameOver){
        return;
    }
    if(curMoleTile){
        curMoleTile.innerHTML="";
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png"

    let num = randomNum();
    if(curPlantTile && curPlantTile.id==num){
        return;
    }
    curMoleTile= document.getElementById(num);
    curMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(curPlantTile){
        curPlantTile.innerHTML="";
    }
    let plant =document.createElement("img");
    plant.src= "./piranha-plant.png";

    let num =randomNum()
    if(curMoleTile && curMoleTile.id==num){
        return;
    }
     curPlantTile = document.getElementById(num);
     curPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == curMoleTile){
        score += 10;
        document.getElementById("score").innerText=score.toString();
    } else if (this == curPlantTile){
        document.getElementById("score").textContent="GAME OVER: " + score.toString();
        gameOver = true;
    }
}