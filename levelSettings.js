function lvl1(){
    //add new Vehicle(s)
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane % 2){
            for(let i = 0; i < 3; i++){ // add 3 cars to every even lane
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }
        currentLane++;
    }

    //set distance between cars
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            if(laneCount === 3 || laneCount === 7){
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else {
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;
        }
        laneCount++;
    }
}

function lvl2(){
    //add new Vehicle(s)
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane % 2 && currentLane !== 3 && currentLane !== 7){ // add 2 trucks to each odd lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else if(!(currentLane % 2)){ // add 3 cars to every even lane
            for(let i = 0; i < 3; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            // right facing blue cars
            if(laneCount === 4 || laneCount === 8){
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else {
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            // left facing red cars
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl3(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane % 2){ // add 2 trucks to each odd lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else { // add 3 cars to every even lane
            for(let i = 0; i < 3; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            // right facing blue cars
            if(laneCount === 4 || laneCount === 8){
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else {
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            // left facing red cars
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl4(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane === 3 || currentLane === 7){ // add 1 taxi to lanes 3 & 7
            for(let i = 0; i < 1; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(taxi));
            }
        } else if(currentLane % 2){ // add 2 trucks to every even lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else {
            for(let i = 0; i < 3; i++){ // add 3 cars to every odd lane
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars 
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            // right facing blue cars
            if(laneCount === 4 || laneCount === 8){
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else {
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            // left facing red cars
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl5(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane === 3 || currentLane === 7){ // add 1 taxi to lanes 3 & 7
            for(let i = 0; i < 1; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(taxi));
            }
        } else if(currentLane % 2){ // add 2 trucks to every even lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else if(currentLane === 2 || currentLane === 10){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else {
            for(let i = 0; i < 3; i++){ // add 3 cars to all other lanes
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars 
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            
            if(laneCount === 4 || laneCount === 8){ // taxis
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else { // trucks
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl6(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane === 3 || currentLane === 7){ // add 1 taxi to lanes 3 & 7
            for(let i = 0; i < 3; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(taxi));
            }
        } else if(currentLane % 2){ // add 2 trucks to every even lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else if(currentLane === 2 || currentLane === 10){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else {
            for(let i = 0; i < 3; i++){ // add 3 cars to all other lanes
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars 
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            
            if(laneCount === 4 || laneCount === 8){ // taxis
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else { // trucks
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl7(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane === 3 || currentLane === 7){ // add 1 taxi to lanes 3 & 7
            for(let i = 0; i < 3; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(taxi));
            }
        } else if(currentLane === 5){ // add 3 trucks to lane 5
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }   
        } else if(currentLane % 2){ // add 2 trucks to every even lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else if(currentLane === 2 || currentLane === 10){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else {
            for(let i = 0; i < 3; i++){ // add 3 cars to all other lanes
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars 
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            
            if(laneCount === 4 || laneCount === 8){ // taxis
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else { // trucks 
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl8(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane === 3 || currentLane === 7){ // add 1 taxi to lanes 3 & 7
            for(let i = 0; i < 3; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(taxi));
            }
        } else if(currentLane === 5){ // add 3 trucks to lane 5
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }   
        } else if(currentLane % 2){ // add 2 trucks to every even lane
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else if(currentLane === 2 || currentLane === 10){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 2; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else if(currentLane === 0 || currentLane === 8){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 3; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else {
            for(let i = 0; i < 3; i++){ // add 3 cars to all other lanes
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }

        currentLane++;
    }

    //set distance between cars 
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            
            if(laneCount === 4 || laneCount === 8){ // taxis
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
            } else { // trucks 
                gameLevel[currentLevel][lane][i].corner[0] = i * 300;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            
            if(laneCount % 2){ 
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}

function lvl9(){
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < 4; i++){
            if(currentLane % 2){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            } else {
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }
        currentLane++;
    }

    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        if(laneCount % 2){ //right side trucks
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;
            }
        } else { // left side cars
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane][i].corner[0] = -i * 200;
                gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;
            }
        }
        laneCount++;
    }
}

function lvl10(){
    //add new Vehicle(s) 
    let currentLane = 0;
    for(let lane in gameLevel[currentLevel]){
        if(currentLane === 3 || currentLane === 7){ // add 1 taxi to lanes 3 & 7
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(taxi));
            }
        } else if(currentLane === 5){ // add 3 trucks to lane 5
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }   
        } else if(currentLane % 2){ // add 2 trucks to every even lane
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(truck));
            }
        } else if(currentLane === 2 || currentLane === 10){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else if(currentLane === 0 || currentLane === 8){ // add 1 cop car to lanes 2 & 10
            for(let i = 0; i < 4; i++){
                gameLevel[currentLevel][lane].push(new Vehicle(cop));
            }
        } else {
            for(let i = 0; i < 4; i++){ // add 3 cars to all other lanes
                gameLevel[currentLevel][lane].push(new Vehicle(car));
            }
        }
        currentLane++;
    }

    //set distance between cars 
    let laneCount = 0;
    for(let lane in gameLevel[currentLevel]){
        for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){
            
            
            if(laneCount === 4 || laneCount === 8){ // cop cars
                gameLevel[currentLevel][lane][i].corner[0] = i * 250 + 200;
            } else { // cars
                gameLevel[currentLevel][lane][i].corner[0] = i * 350 + 100;
            }
            gameLevel[currentLevel][lane][i].corner[1] += laneCount * gorillaHeight;

            
            if(laneCount % 2){ // taxis/trucks
                for(let i = 0; i < gameLevel[currentLevel][lane].length; i++){ 
                    gameLevel[currentLevel][lane][i].corner[0] = i * 200;
                    gameLevel[currentLevel][lane][i].corner[1] = laneCount * gorillaHeight + 88;
                }
            }
        }
        laneCount++;
    }
}