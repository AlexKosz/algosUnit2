//two robots on an infinite plane
//both get same code, can move left, right, do nothing and check for poarachute


//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function moveLeft(robot1pos, robot2pos) {
    robot1pos--;
    robot2pos--;
    return robot1pos, robot2pos;
}


function robotMeet() {
    let robot1pos = getRandomInt(100);
    let robot2pos = getRandomInt(100);
    let robot1speed = 1;
    let robot2speed = 1;
    let met = false;
    let count = 0;
    while (met = false) {
        moveLeft(robot1pos, robot2pos)
        if (robot2pos == robot1pos + count) {
            robot2speed = 2;
        }
        if (robot1pos == robot2pos + count) {
            robot1speed = 2;
        }



        count++;
    }


}