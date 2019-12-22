var scaryArray = [
    { name: "freddy", image: "assets/images/freddy.jpg" }, 
    { name: "jason", image: "assets/images/jason.jpg" }, 
    { name: "michael", image: "assets/images/michael.jpg" },
    { name: "jack", image: "assets/images/jack.jpg" }
  ];



let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = "assets/images/kitty.jpg";
let beachDoorPath = "assets/images/michael.jpg";
let spaceDoorPath = "assets/images/freddy.jpg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let closedDoorPath1 = "https://twistedskillz.com/wp-content/uploads/2019/12/not_scary_at_all_door.jpg"; 
// "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
let closedDoorPath2 = "https://twistedskillz.com/wp-content/uploads/2019/12/scary_door.jpg";
let closedDoorPath3 = "https://twistedskillz.com/wp-content/uploads/2019/12/very_scary_door.jpg";
let wins = 0;




//Id's kitty
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}
// checks if door is clicked
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




const playDoor = (door) => {
    numClosedDoors--;
    if (isBot(door)) {
        gameOver('win');
    } else {
        gameOver('lose');
    }

}



const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        (choreDoor === 2)
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}





door1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(door1);
    }
}

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(door2)) {
        doorImage2.src = openDoor2;
        playDoor(door2);
    }
}
door3.onclick = () => {
    if (currentlyPlaying && !isClicked(door3)) {
        doorImage3.src = openDoor3;
        playDoor(door3);
    }
}

startButton.onclick = () => {
    if (!currentlyPlaying) {
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