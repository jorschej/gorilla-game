const gorillaPic = document.createElement('img'),
      bananaStandPic = document.createElement('img'),
      startScreenBGPic = document.createElement('img'),
      topSidewalkPic = document.createElement('img'),
      bottomSidewalkPic = document.createElement('img'),
      roadPic = document.createElement('img'),
      carPic = document.createElement('img'),
      truckPic = document.createElement('img'),
      taxiPic = document.createElement('img'),
      copCarPic = document.createElement('img'),
      bananasPic = document.createElement('img'),
      bananasBlackPic = document.createElement('img');

let gorillaPicLoaded = false,
    bananaStandPicLoaded = false,
    startScreenBGPicLoaded = false,
    topSidewalkPicLoaded = false,
    bottomSidewalkPicLoaded = false,
    roadPicLoaded = false,
    carPicLoaded = false,
    truckPicLoaded = false,
    taxiPicLoaded = false,
    copCarPicLoaded = false,
    bananasPicLoaded = false,
    bananasBlackPicLoaded = false;

//     Load Images

gorillaPic.onload = function(){
    gorillaPicLoaded = true;
}
gorillaPic.src = 'images/gorilla.png';

bananaStandPic.onload = function(){
    bananaStandPicLoaded = true;
}
bananaStandPic.src = 'images/bananaStand.png';

startScreenBGPic.onload = function(){
    startScreenBGPicLoaded = true;
}
startScreenBGPic.src = 'images/startScreenBG.png';

topSidewalkPic.onload = function(){
    topSidewalkPicLoaded = true;
}
topSidewalkPic.src = 'images/topSidewalk.png';

bottomSidewalkPic.onload = function(){
    bottomSidewalkPicLoaded = true;
}
bottomSidewalkPic.src = 'images/bottomSidewalk.png';

roadPic.onload = function(){
    roadPicLoaded = true;
}
roadPic.src = 'images/road.png';

carPic.onload = function(){
    carPicLoaded = true;
}
carPic.src = 'images/car.png';

truckPic.onload = function(){
    truckPicLoaded = true;
}
truckPic.src = 'images/truck.png';

taxiPic.onload = function(){
    taxiPicLoaded = true;
}
taxiPic.src = 'images/taxi.png';

copCarPic.onload = function(){
    copCarPicLoaded = true;
}
copCarPic.src = 'images/copCar.png';

bananasPic.onload = function(){
    bananasPicLoaded = true;
}
bananasPic.src = 'images/bananas.png';

bananasBlackPic.onload = function(){
    bananasBlackPicLoaded = true;
}
bananasBlackPic.src = 'images/bananasBlack.png';