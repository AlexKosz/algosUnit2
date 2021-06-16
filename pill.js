/*The apocalypse finally happened. There was a massive outbreak, a pandemic with no cure. 
The world has been torn apart, cities crumbled to the ground, no hope for mankind in sight. 
After 3 years of surviving you find yourself and your group traveling towards a small town somewhere in the MidWest. 
On the side of the road lay a dying man. Your group tries to help him but the sickness has taken over and he only has moments left. 
With his last words he tells you that there is a cure. "In the tall building at the end of the road, on the 6th floor, at the end of the hall, 
there is a room with a digital scale and a cabinet. Inside the cabinet are 20 pill bottles, each bottle containing 20 pills each. 
One bottle contains the cure, the pills in that bottle weigh 1.01 grams each. The rest of the bottles contain pills that weigh 1 gram each and when consumed will kill you. 
The scale in the room works but it only has enough battery life to weigh something once. It will give you one reading then it will die...". 
How do you figure out what pills will save the world. Your group sets forth to the breakout room of your choice to save the world.
*/



const pillsPerBottle = 20;
const numOfBottles = 20;
const curePillWeight = 1.01;
const deathPillWeight = 1.00;
const cure = Math.floor(Math.random() * 20) + 1 //random num between 1 and 20 from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
let bottles = [];

//generate array of pill bottles with a cure at a random spot
for (let i = 0; i < numOfBottles; i++) {
    if (i == cure) {
        bottles.push("Cure")
    }
    else {
        bottles.push("Death")
    }
}

//assign each bottle a number, add that many pills to the amount to be weighed
let totalWeight = 0;
for (i = 1; i < bottles.length + 1; i++) {
    if (bottles[i] == "Cure") {
        totalWeight += (curePillWeight * i)
    }
    else {
        totalWeight += (deathPillWeight * i)
    }
}

//take the weight, subtract 210 grams for the 210 pills (20 *1 + 19*1 + 18*1 + ... etc.), the decimal off is what bottle number is the cure
let cureBottle = Math.round((totalWeight - 210) * 100);

console.log(cureBottle + " is the bottle with the cure")
console.log(cure + " Correct?")

