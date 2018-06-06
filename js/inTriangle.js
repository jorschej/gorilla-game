// top triangle section of screen
function inTriangleA(bX,cX,cY,pX,pY){
    let aX = 0,
        aY = 0,
        bY = 0;
    
    let w1 = (aX * (cY - aY) + (pY - aY) * (cX - aX) - pX * (cY - aY)) / ((bY - aY) * (cX - aX) - (bX - aX) * (cY - aY));

    let w2 = (pY - aY - w1 * (bY - aY)) / (cY - aY);

    if(w1 >= 0 && w2 >= 0 && (w1 + w2 <= 1)){
        return true;
    }
}

// right triangle section of screen
function inTriangleB(aX,bX,bY,cX,cY,pX,pY){
    let aY = 0;

    let w1 = (aX * (cY - aY) + (pY - aY) * (cX - aX) - pX * (cY - aY)) / ((bY - aY) * (cX - aX) - (bX - aX) * (cY - aY));

    let w2 = (pY - aY - w1 * (bY - aY)) / (cY - aY);

    if(w1 >= 0 && w2 >= 0 && (w1 + w2 <= 1)){
        return true;
    }
}

// bottom triangle section of screen
function inTriangleC(aY,bX,bY,cX,cY,pX,pY){
    let aX = 0;
    
    let w1 = (aX * (cY - aY) + (pY - aY) * (cX - aX) - pX * (cY - aY)) / ((bY - aY) * (cX - aX) - (bX - aX) * (cY - aY));

    let w2 = (pY - aY - w1 * (bY - aY)) / (cY - aY);

    if(w1 >= 0 && w2 >= 0 && (w1 + w2 <= 1)){
        return true;
    }
}

// left triangle section of screen
function inTriangleD(bY,cX,cY,pX,pY){
    let aX = 0,
        aY = 0,
        bX = 0;
    
    let w1 = (aX * (cY - aY) + (pY - aY) * (cX - aX) - pX * (cY - aY)) / ((bY - aY) * (cX - aX) - (bX - aX) * (cY - aY));

    let w2 = (pY - aY - w1 * (bY - aY)) / (cY - aY);

    if(w1 >= 0 && w2 >= 0 && (w1 + w2 <= 1)){
        return true;
    }
}