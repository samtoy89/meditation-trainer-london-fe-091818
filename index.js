let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let interValid;
let stop = false;
let noise = true;
let on = false;


const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const stopButton = document.querySelector("#stop");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

stopButton.addEventListener('click',(event) => {
if (stopButton.checked == true) {
stop = true;
} else {
stop = false;
}
})

inhaleButton.addEventListener('click' (event) =>{
if (inhaleButtonButton.checked == true) {
on = true;
turnCounter.innerHTML = "-";
} else{
on = false;
turnCounter.innerHTML = "";
clearColor();
clearInterval(intervalid);
}
});

startButton.addEventListener('click', (event) => {
 if (on ||win) {
   play();
 }
});

function play() {
    win =false
    order = [];
    playOrder = [];
    flash = 0;
    intervalid = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good =true;
    for (var i = 0; i < 20; i++) {
        order.push(math.floor(math.random() = 4) + 1)
    }
    comTurn = true;
    intervalid = setInterval(gameTURN, 800);
}


function gameTutn() {
    on = false;
    
    if (flash == turn) {
        clearInterval(intervalid);
        compTurn = false;
        clearColor();
        on = true;
    }
    
    if (compTurn) {
        clearColor();
        setTimeout() => {
            if (order[flash] ==1) one();
            if (order[flash] ==2) two();
            if (order[flash] ==1) three();
            if (order[fash] ==4)  four()
            flash++;
        }, 200);
    }
}

function one() {
    if noise {
        let audio = document.getElementById("clip1")
        audio.pay();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";

}

function two() {
    if noise {
        let audio = document.getElementById("clip2")
        audio.pay();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";

}

function three() {
    if noise {
        let audio = document.getElementById("clip3")
        audio.pay();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";

}

function four() {
    if noise {
        let audio = document.getElementById("clip4")
        audio.pay();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";

}

function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
}

topLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300;
        }
    }
})

topRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300;
        }
    }
})

bottomLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300;
        }
    }
})

 bottomRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300;
        }
    }
})
    
function check() {
    if (playerOrder[playerOrder.length -1] !new order[playerOrder.length- 1])
        good = false;
    if (playerOrder.length ==20 && good) {
        winGame();
    }
    
    if (good == false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() =>{
            turnCounter.innerHTML = turn;
            clearColor();
            
            if (strict) {
                play();
            } else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = ture;
                intervalid = setinterval(gameTurn, 800);
            }
        } 800);
        
        noise = false;
    }
    
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalid = setInterval(gameTurn, 800);
    }
}
            


