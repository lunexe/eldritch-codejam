console.log('Hello Word!');
//Import JS date file 
import difficulties from '../data/difficulties.js';
import ancientsData from '../data/ancients.js';
//import blueCards from '../data/mythicCards/blue/index.js';
//import brownCards from '../data/mythicCards/brown/index.js';
//import greenCards from '../data/mythicCards/green/index.js';

import card from '../js/cardsdata.js';


//Const_date 
const azathoth = document.getElementById('azathoth');
const cthulthu = document.getElementById('cthulthu');
const iogSothoth = document.getElementById('iogsothoth');
const shubNiggurath = document.getElementById('shubniggurath');

const ancients = document.querySelectorAll('.ancients__item');
const levels = document.querySelector('.levels__buttons');
const difficult = document.querySelectorAll('.buttons__iteam');
const veryLowBtn = document.getElementById('very__low');
const lowBtn = document.getElementById('low');
const middleBtn = document.getElementById('middle');
const highBtn = document.getElementById('high');
const veryHighBtn = document.getElementById('very__high');
const shufflButton = document.querySelector('.shuffle__button');

const stFirst = document.querySelectorAll('first');


//Active cards

let chosenAncient;
let currentAncient =[];
let currentColode = [];
ancients.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        ancients.forEach(element => {
        element.style.border = "none";
    });
      element.style.border = "solid 2px red";
      levels.style.visibility = `visible`;
      chosenAncient = index;
      currentAncient.length = 0;
      //использовать index для идентификации выбора 
      currentAncient.push(ancientsData[chosenAncient].firstStage, ancientsData[chosenAncient].secondStage, ancientsData[chosenAncient].thirdStage);
    for (let key in card) {
        currentColode[key] = card[key];
    }
    //console.log(currentColode);
});

});
console.log(chosenAncient);//test!!!

//difficult 
let chosenDiffucalty = 1;
let greenColodCards = [];
let brownColodCards = [];
let blueColodCards = [];

difficult.forEach((element ,index) => {
    element.addEventListener('click', (e) => {
      difficult.forEach(element => {
        element.classList.remove('active');
      });
      chosenDiffucalty = index;
      e.target.classList.add('active');
      let arrGreenCards;
      let arrBrownCards;
      let arrBlueCards;
      if (index === 0) {
        arrGreenCards = card.filter(element => element.difficulty === 'easy' || element.difficulty === 'normal' && element.color === 'green');
        arrBrownCards = card.filter(element => element.difficulty === 'easy' || element.difficulty === 'normal' && element.color === 'brown');
        arrBlueCards = card.filter(element => element.difficulty === 'easy' || element.difficulty === 'normal' && element.color === 'blue');
       
      } else if  (index === 1) {
        arrGreenCards = card.filter(element => element.difficulty === 'normal' && element.color === 'green');
        arrBrownCards = card.filter(element => element.difficulty === 'normal' && element.color === 'brown');
        arrBlueCards = card.filter(element => element.difficulty === 'normal'&& element.color === 'blue');
      }
      currentColode.greenCards = arrGreenCards;
      currentColode.brownCards = arrBrownCards;
      currentColode.blueCards = arrBlueCards;
    });
 
  });
 let colode = [];


//Dots 
const greens = document.querySelectorAll('.green');
const browns = document.querySelectorAll('.brown');
const blues = document.querySelectorAll('.blue');

let firstGreen = document.querySelector('.first__green'); 
let secondGreen = document.querySelector('.second__green');
let thirdGreen = document.querySelector('.third__green');

let firstBrown = document.querySelector('.first__brown'); 
let secondBrown = document.querySelector('.second__brown');
let thirdBrown = document.querySelector('.third__brown');

let firstBlue = document.querySelector('.first__blue'); 
let secondBlue = document.querySelector('.second__blue');
let thirdBlue = document.querySelector('.third__blue');

let allGreen = 0;
let allBlue = 0;
let allBrown = 0;

shufflButton.addEventListener('click', () => {
    allGreen = 0;
    allBrown = 0;
    allBlue = 0;

    let greensArr = [];
    let brownsArr = [];
    let bluesArr = [];
    greens.forEach((el, id) => {
        el.textContent = currentAncient[id].greenCards;
        allGreen = allGreen + Number(el.textContent);
    });
    browns.forEach((el, id) => {
        el.textContent = currentAncient[id].brownCards;
        allBrown = allBrown + Number(el.textContent);
      });
      blues.forEach((el, id) => {
        el.textContent = currentAncient[id].blueCards;
        allBlue = allBlue + Number(el.textContent);
      });
for (let i = 0; i < allGreen; i++){
    const randomCard = Math.floor(Math.random()*currentColode.greenCards.length);
    greensArr.push(...currentColode.greenCards.splice(randomCard, 1));
    //console.log(greensArr);
}
for (let i = 0; i < allBrown; i++){
    const randomCard = Math.floor(Math.random()*currentColode.brownCards.length);
    brownsArr.push(...currentColode.brownCards.splice(randomCard, 1));
    
}
for (let i = 0; i < allBlue; i++){
    const randomCard = Math.floor(Math.random()*currentColode.blueCards.length);
    bluesArr.push(...currentColode.blueCards.splice(randomCard, 1));
    //console.log(bluesArr);
}
//console.log(firstGreen.textContent);
let greenStagesOne = [];
let greenStagesTwo = [];
let greenStagesThree = [];

for (let i = 0; i < Number(firstGreen.textContent); i++) {
    greenStagesOne.push(greensArr[i]);
}
for (let i = Number(firstGreen.textContent); i < (Number(secondGreen.textContent) + Number(firstGreen.textContent)); i++) {
    greenStagesTwo.push(greensArr[i]);
}
for (let i = (Number(secondGreen.textContent) + Number(firstGreen.textContent)); i <= (Number(secondGreen.textContent) + Number(firstGreen.textContent) + Number(firstGreen.textContent)); i++) {
    greenStagesThree.push(greensArr[i]);
}
//console.log (greenStagesOne);
//console.log (greenStagesTwo);
//console.log (greenStagesThree);
//console.log(greensArr);
let blueStagesOne = [];
let blueStagesTwo = [];
let blueStagesThree =[];
for (let i = 0; i < Number(firstBlue.textContent); i++) {
    blueStagesOne.push(bluesArr[i]);
}
for (let i = Number(firstBlue.textContent); i < (Number(secondBlue.textContent) + Number(firstBlue.textContent)); i++) {
    blueStagesTwo.push(bluesArr[i]);
}
for (let i = (Number(secondBlue.textContent) + Number(firstBlue.textContent)); i <= (Number(secondBlue.textContent) + Number(firstBlue.textContent) + Number(firstBlue.textContent)); i++) {
    blueStagesThree.push(bluesArr[i]);
}
let brownStagesOne = [];
let brownStagesTwo = [];
let brownStagesThree =[];
for (let i = 0; i < Number(firstBrown.textContent); i++) {
    brownStagesOne.push(brownsArr[i]);
}
for (let i = Number(firstBrown.textContent); i < (Number(secondBrown.textContent) + Number(firstBrown.textContent)); i++) {
    brownStagesTwo.push(brownsArr[i]);
}
for (let i = (Number(secondBrown.textContent) + Number(firstBrown.textContent)); i <= (Number(secondBrown.textContent) + Number(firstBrown.textContent) + Number(firstBrown.textContent)); i++) {
    brownStagesThree.push(brownsArr[i]);
}

let firstDeck = [...greenStagesOne, ...blueStagesOne, ...brownStagesOne];
let secondDeck = [...greenStagesTwo, ...blueStagesTwo, ...brownStagesTwo];
let thirdDeck = [...greenStagesThree, ...blueStagesThree, ...brownStagesThree];
console.log(firstDeck);
console.log(secondDeck);
console.log(thirdDeck);





});
// 
function getMainDeck() {

    let newBlueCards = [];
    let newBrownCards = [];
    let newGreenCards = [];


}
//Random number 
  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//

//Last card 
const lastCard = document.querySelector('.last__card');





