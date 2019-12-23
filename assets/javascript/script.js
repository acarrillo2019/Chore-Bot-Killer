var scaryArray = [
    "assets/images/freddy.jpg", 
    "assets/images/jason.jpg", 
    "assets/images/michael.jpg",
    "assets/images/jack.jpg"
  ];



let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = "assets/images/kitty.jpg";

let beachDoorPath = scaryArray[Math.floor(Math.random() * scaryArray.length)];
let spaceDoorPath = scaryArray[Math.floor(Math.random() * scaryArray.length)];
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let closedDoorPath1 = "https://twistedskillz.com/wp-content/uploads/2019/12/not_scary_at_all_door.jpg"; 
let closedDoorPath2 = "https://twistedskillz.com/wp-content/uploads/2019/12/scary_door.jpg";
let closedDoorPath3 = "https://twistedskillz.com/wp-content/uploads/2019/12/very_scary_door.jpg";
wins = 0;


const isClicked = (door) => {
    if (door.src === closedDoorPath1) {
        return false;
    } else if (door.src === closedDoorPath2) {
        return false;
    } else if (door.src === closedDoorPath3) {
        return false;
    } else {
        return true;
    }
} 


const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else { (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

door1.onclick = () => {
    if(currentlyPlaying && !isClicked(door1) && openDoor1 === botDoorPath) {
        doorImage1.src = openDoor1;
        gameOver('win');
        currentlyPlaying = false;
  } else if (currentlyPlaying && !isClicked(door1) && openDoor1 === beachDoorPath){
      doorImage1.src = openDoor1;
      gameOver('lose');
  } else if (currentlyPlaying && !isClicked(door1) && openDoor1 === spaceDoorPath){
    doorImage1.src = openDoor1;
    gameOver('lose');
}
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2) && openDoor2 === botDoorPath) {
    doorImage2.src = openDoor2;
    gameOver('win');
    currentlyPlaying = false;
} else if (currentlyPlaying && !isClicked(door2) && openDoor2 === beachDoorPath){
    doorImage2.src = openDoor2;
    gameOver('lose');
} else if (currentlyPlaying && !isClicked(door2) && openDoor2 === spaceDoorPath){
    doorImage2.src = openDoor2;
    gameOver('lose');
}
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3) && openDoor3 === botDoorPath) {
    doorImage3.src = openDoor3;
    gameOver('win');
    currentlyPlaying = false;
} else if (currentlyPlaying && !isClicked(door3) && openDoor3 === beachDoorPath){
    doorImage3.src = openDoor3;
    gameOver('lose');
} else if (currentlyPlaying && !isClicked(door3) && openDoor3 === spaceDoorPath){
    doorImage3.src = openDoor3;
    gameOver('lose');
}
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
  startRound();
}
}

const startRound = () => {
  door1.src = closedDoorPath1;
  door2.src = closedDoorPath2;
  door3.src = closedDoorPath3;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}



const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win!';
} else {
  startButton.innerHTML = 'Game over!';
}
  currentlyPlaying = false;
}



startRound();