var canvas;
var c;

let enterButton,
    upButton,
    downButton,
    leftButton,
    rightButton;

let gorillaX = 308;
let gorillaY = 0;
const gorillaWidth = 44;
const gorillaHeight = 44;
const fruitStandX = 500;
const fruitStandY = 660 - 88; // canvas.height - height of fruit stand
let fruitX = fruitStandX;
let fruitY = fruitStandY;

let startScreen = true,
    scoreScreen = false;
    victoryScreen = false;
    fruitAcquired = false,
    currentLevel = 0;

let car = 'car',
    truck = 'truck',
    taxi = 'taxi',
    cop = 'cop';

function Street(){ // each array is an empty lane
    return {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: []
    }
}

let gameLevel = { // each level/key is a blank street
    1: new Street(),
    2: new Street(),
    3: new Street(),
    4: new Street(),
    5: new Street(),
    6: new Street(),
    7: new Street(),
    8: new Street(),
    9: new Street(),
    10: new Street()
}

let bananaScore = [];
for(let i = 0; i < 10; i++){
    bananaScore.push(false);
}

//template for placeholder rect objects
function colorRect(topLeftX,topLeftY,boxWidth,boxHeight,fillColor){
    c.fillStyle = fillColor;
    c.fillRect(topLeftX,topLeftY,boxWidth,boxHeight);
}

function Vehicle(type){ // parameter is type of vehicle: car,truck,taxi,cop
    this.corner = [0,88];
    this.width = gorillaWidth*2;
    this.height = gorillaHeight;
    this.type = type;
}

Vehicle.prototype.drawCar = function(){
    if(carPicLoaded){
        c.drawImage(carPic,
            this.corner[0], this.corner[1]);
    }
}

Vehicle.prototype.drawTruck = function(){
    if(truckPicLoaded){
        c.drawImage(truckPic,
            this.corner[0], this.corner[1]);
    }
}

Vehicle.prototype.drawTaxi = function(){
    if(taxiPicLoaded){
        c.drawImage(taxiPic,
            this.corner[0], this.corner[1]);
    }
}

Vehicle.prototype.drawCopCar = function(){
    if(copCarPicLoaded){
        c.drawImage(copCarPic,
            this.corner[0], this.corner[1]);
    }
}

function loadLevel(lvl){
    gorillaX = 308;
    gorillaY = 0;

    if(lvl === 1){
        lvl1();
    }
    if(lvl === 2){
        lvl2(); 
    }
    if(lvl === 3){    
        lvl3();
    }
    if(lvl === 4){
        lvl4();
    }
    if(lvl === 5){
        lvl5();
    }
    if(lvl === 6){
        lvl6();
    }
    if(lvl === 7){
        lvl7();
    }
    if(lvl === 8){
        lvl8();
    }
    if(lvl === 9){
        lvl9();
    }
    if(lvl === 10){
        lvl10();
    }        
}

function drawStartScreen(){
    if(startScreenBGPicLoaded){
        c.drawImage(startScreenBGPic,
            0,0);
    }

    c.font = '25px Arial';
    c.fillStyle = 'black';
    c.fillText('The gorilla just escaped the zoo and needs to eat!',10,175);
    c.fillText('Get the gorilla to the banana stand across the',10,200);
    c.fillText('road and back.',10,225);
    
    c.fillStyle = 'blue';
    c.fillText('Press enter to start!',200,400);

    c.fillStyle = 'black';
    c.fillText('Use the arrow keys to move the gorilla.',10,475);
    c.fillText('Once you have made it to the banana stand, you have',10,500);
    c.fillText('to return to the original side of the road.',10,525);

    if(gorillaPicLoaded){
        c.drawImage(gorillaPic,
            canvas.width/2-88, canvas.height/2);
    }

    if(bananaStandPicLoaded){
        c.drawImage(bananaStandPic,
            canvas.width/2, canvas.height/2-44);
    } 
}

function drawScoreScreen(){
    if(startScreenBGPicLoaded){
        c.drawImage(startScreenBGPic,
            0,0);
    }

    c.font = '50px Arial';
    c.fillStyle = 'black';
    c.fillText('Success!',200,175);
    
    c.font = '25px Arial';
    c.fillStyle = 'blue';
    c.fillText('Press enter to start the next level!',135,400);

    if(gorillaPicLoaded){
        c.drawImage(gorillaPic,
            canvas.width/2-88, canvas.height/2);
    }

    if(bananaStandPicLoaded){
        c.drawImage(bananaStandPic,
            canvas.width/2, canvas.height/2-44);
    }

    for(let i = 0; i < bananaScore.length; i++){
        if(bananasPicLoaded && bananaScore[i]){
            c.drawImage(bananasPic,
                i*44 + 110, 430);
        } else if(bananasPicLoaded){
            c.drawImage(bananasBlackPic,
                i*44 + 110, 430);
        }
    }
}

function drawVictoryScreen(){
    if(startScreenBGPicLoaded){
        c.drawImage(startScreenBGPic,
            0,0);
    }

    c.font = '50px Arial';
    c.fillStyle = 'black';
    c.fillText('Congratulations!',130,175);
    
    c.font = '40px Arial';
    c.fillStyle = 'blue';
    c.fillText('Press enter to start a new game!',20,420);

    if(gorillaPicLoaded){
        c.drawImage(gorillaPic,
            canvas.width/2-88, canvas.height/2);
    }

    if(bananaStandPicLoaded){
        c.drawImage(bananaStandPic,
            canvas.width/2, canvas.height/2-44);
    } 
}

function drawVehicles(){
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            if(gameLevel[currentLevel][lane][i].type === car){
                gameLevel[currentLevel][lane][i].drawCar();
            } else if(gameLevel[currentLevel][lane][i].type === truck){
                gameLevel[currentLevel][lane][i].drawTruck();
            } else if(gameLevel[currentLevel][lane][i].type === taxi){
                gameLevel[currentLevel][lane][i].drawTaxi();
            } else if(gameLevel[currentLevel][lane][i].type === cop){
                gameLevel[currentLevel][lane][i].drawCopCar();
            }
        }
    }
}

// draw up all objects
function drawAll(){
    
    if(startScreen){
        drawStartScreen();
    }
    
    if(victoryScreen){
        drawVictoryScreen();
    }

    if(scoreScreen){
        drawScoreScreen();
    }

    // once enter has been pressed load images and start game
    if(!startScreen && !scoreScreen && !victoryScreen){
        
        if(topSidewalkPicLoaded){
            c.drawImage(topSidewalkPic,
                0,0);
        }

        if(bottomSidewalkPicLoaded){
            c.drawImage(bottomSidewalkPic,
                0,canvas.height-gorillaHeight*2);
        }

        if(bananaStandPicLoaded){
            c.drawImage(bananaStandPic,
                fruitStandX,fruitStandY);
        }

        if(roadPicLoaded){
            c.drawImage(roadPic,
                0,88);
        }

        if(gorillaPicLoaded){
            c.drawImage(gorillaPic,
                gorillaX, gorillaY);
        }

        // draw cars
        drawVehicles();
        
        // draw fruit if gorilla has made it to the stand
        if(fruitAcquired){
            if(bananasPicLoaded){
                c.drawImage(bananasPic,
                    gorillaX+22, gorillaY+22);
            }
        }
    }

    // draw currentLevel number
    c.font = '44px Arial';
    c.fillStyle = 'black';
    c.fillText(currentLevel,canvas.width-60,44);
    
}

function moveAll(){
    let slowCarSpeed = 1,
        mediumCarSpeed = 2,
        fastCarSpeed = 5;
    
    // functions to move vehicles based on type, pass in lane and i from loops
    function moveCars(lane,i){
        gameLevel[currentLevel][lane][i].corner[0] += mediumCarSpeed;
            
        // loop/reset cars
        if(gameLevel[currentLevel][lane][i].corner[0] > canvas.width + gorillaWidth*2){ 
            gameLevel[currentLevel][lane][i].corner[0] = 0 - gorillaWidth*2;
        }            
    }

    function moveTrucks(lane,i){
        gameLevel[currentLevel][lane][i].corner[0] -= mediumCarSpeed;
        
        // loop/reset trucks
        if(gameLevel[currentLevel][lane][i].corner[0] < -gorillaWidth*2){ 
            gameLevel[currentLevel][lane][i].corner[0] = canvas.width + gorillaWidth*2;
        }           
    }

    function moveTaxis(lane,i){
        gameLevel[currentLevel][lane][i].corner[0] -= slowCarSpeed;
            
        // loop/reset taxis
        if(gameLevel[currentLevel][lane][i].corner[0] < -gorillaWidth*2){ 
            gameLevel[currentLevel][lane][i].corner[0] = canvas.width + gorillaWidth*2;
        }           
    }

    function moveCopCars(lane,i){
        gameLevel[currentLevel][lane][i].corner[0] += fastCarSpeed;
            
        // loop/reset cop cars
        if(gameLevel[currentLevel][lane][i].corner[0] > canvas.width + gorillaWidth*2){ 
            gameLevel[currentLevel][lane][i].corner[0] = 0 - gorillaWidth*2;
        }            
    }

    //move cars

    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            if(gameLevel[currentLevel][lane][i].type === car){
                moveCars(lane,i);
            } else if(gameLevel[currentLevel][lane][i].type === truck){
                moveTrucks(lane,i);
            } else if(gameLevel[currentLevel][lane][i].type === taxi){
                moveTaxis(lane,i);
            } else if(gameLevel[currentLevel][lane][i].type === cop){
                moveCopCars(lane,i);
            }
        }
    }
    
}

// check if gorilla has hit a car, if it has reset the gorilla's position
function collision(){ 
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            if(gorillaX > gameLevel[currentLevel][lane][i].corner[0] && gorillaX < gameLevel[currentLevel][lane][i].corner[0]+gorillaWidth*2
                && gorillaY === gameLevel[currentLevel][lane][i].corner[1]
                || gorillaX+gorillaWidth > gameLevel[currentLevel][lane][i].corner[0] && gorillaX+gorillaWidth < gameLevel[currentLevel][lane][i].corner[0]+gorillaWidth*2
                && gorillaY === gameLevel[currentLevel][lane][i].corner[1]
            ){
                collisionSnd.play();
                gorillaX = 308;
                gorillaY = 0;
                fruitAcquired = false;
                fruitX = fruitStandX;
                fruitY = fruitStandY;
            }
        }
    }        
}

function fruitTaken(){
    if(gorillaX >= canvas.width-132 && gorillaY >= fruitStandY && !fruitAcquired){ // check if gorilla is in range of fruit stand to take fruit
        fruitAcquired = true;
        fruitSnd.play();
    }

    if(fruitAcquired){ // keep fruit with gorilla if taken
        fruitX = gorillaX;
        fruitY = gorillaY;

        if(fruitY < 88){ // check if gorilla has made it back with the fruit
            if(currentLevel === 10){
                successSnd.play();
                fruitAcquired = false;
                fruitX = fruitStandX;
                fruitY = fruitStandY;
                bananaScore[currentLevel-1] = true;
                victoryScreen = true;
            } else {
                successSnd.play();
                fruitAcquired = false;
                fruitX = fruitStandX;
                fruitY = fruitStandY;
                bananaScore[currentLevel-1] = true;
                scoreScreen = true;
            }
        }
    }
}

// main function to run all others
function updateAll(){
    requestAnimationFrame(updateAll); // loops updateAll
    moveAll();
    drawAll();
    collision();
    fruitTaken();
}

// wait for DOM to load
window.addEventListener('load', ()=>{ 

    canvas = document.querySelector('canvas');
    canvas.width = 616;
    canvas.height = 660;
    c = canvas.getContext('2d');

    //buttons
    enterButton = document.getElementById('enter');
    upButton = document.getElementById('up');
    downButton = document.getElementById('down');
    leftButton = document.getElementById('left');
    rightButton = document.getElementById('right');

    updateAll(); // main game function
       
    //controls
    
    var down = false; // remove sprint, if down is true, gorilla will not step

    // key press listener controls 
    document.addEventListener('keydown', e => {
        if(down) return; // if key is still down exit listener

        let x = e.key;
        let step = gorillaHeight;
    
        if(!startScreen && !scoreScreen && !victoryScreen){
            if(x === 'ArrowUp' && gorillaY > 0){
                e.preventDefault();
                gorillaY -= step;
                down = true;
            } else if(x === 'ArrowDown' && gorillaY < canvas.height-gorillaHeight){
                e.preventDefault();
                gorillaY += step;
                down = true;
            } else if(x === 'ArrowLeft' && gorillaX > 0){
                e.preventDefault();
                gorillaX -= step;
                down = true;
            } else if(x === 'ArrowRight' && gorillaX < canvas.width-gorillaWidth){
                e.preventDefault();
                gorillaX += step;
                down = true;
            }
        }
    }, false);

    document.addEventListener('keyup', e => {
        down = false;
    }, false);
    
    // exit start/score screen and begin game/next lvl if enter is pressed
    document.addEventListener('keydown', e => {
        let x = e.key;

        if(x === 'Enter' && startScreen){
            startScreen = false;
            currentLevel++;
            loadLevel(currentLevel);
        } else if(x === 'Enter' && scoreScreen){
            scoreScreen = false;
            currentLevel++;
            loadLevel(currentLevel);
        } else if(x === 'Enter' && victoryScreen){
            victoryScreen = false;
            // reset game
            currentLevel = 0;
            gameLevel = {
                1: new Street(),
                2: new Street(),
                3: new Street(),
                4: new Street(),
                5: new Street(),
                6: new Street(),
                7: new Street(),
                8: new Street(),
                9: new Street(),
                10: new Street()
            }
            // reset banana score arr and fill with false
            bananaScore = [];
            for(let i = 0; i < 10; i++){
                bananaScore.push(false);
            }
            // bring player back to start screen
            startScreen = true;
        }
    });

    // button listener controls

    upButton.addEventListener('click', () => {
        let step = gorillaHeight;
    
        if(!startScreen && !scoreScreen && !victoryScreen && gorillaY > 0){  
            gorillaY -= step;
        }
    });
    downButton.addEventListener('click', () => {
        let step = gorillaHeight;
    
        if(!startScreen && !scoreScreen && !victoryScreen && gorillaY < canvas.height-gorillaHeight){  
            gorillaY += step;
        }
    });
    leftButton.addEventListener('click', () => {
        let step = gorillaHeight;
    
        if(!startScreen && !scoreScreen && !victoryScreen && gorillaX > 0){  
            gorillaX -= step;
        }
    });
    rightButton.addEventListener('click', () => {
        let step = gorillaHeight;
    
        if(!startScreen && !scoreScreen && !victoryScreen && gorillaX < canvas.width-gorillaWidth){  
            gorillaX += step;
        }
    });

    // exit start/score screen and begin game/next lvl if enter is pressed
    enter.addEventListener('click', () => {

        if(startScreen){
            startScreen = false;
            currentLevel++;
            loadLevel(currentLevel);
        } else if(scoreScreen){
            scoreScreen = false;
            currentLevel++;
            loadLevel(currentLevel);
        } else if(victoryScreen){
            victoryScreen = false;
            // reset game
            currentLevel = 0;
            gameLevel = {
                1: new Street(),
                2: new Street(),
                3: new Street(),
                4: new Street(),
                5: new Street(),
                6: new Street(),
                7: new Street(),
                8: new Street(),
                9: new Street(),
                10: new Street()
            }
            // reset banana score arr and fill with false
            bananaScore = [];
            for(let i = 0; i < 10; i++){
                bananaScore.push(false);
            }
            // bring player back to start screen
            startScreen = true;
        }
    });

});