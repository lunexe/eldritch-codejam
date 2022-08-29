console.log('Hello Word!');
//Import JS date file 
import difficulties from '../data/difficulties.js';
import ancientsData from '../data/ancients.js';
//import blueCards from '../data/mythicCards/blue/index.js';
//import brownCards from '../data/mythicCards/brown/index.js';
//import greenCards from '../data/mythicCards/green/index.js';

import card from '../js/cardsData2.js';
import cardsData from '../js/cardsData2.js';


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
const stSecond = document.querySelectorAll('second');
const stThird = document.querySelectorAll('third');

const colodeBtn = document.querySelector('.deck');
const lastCard = document.querySelector('.last__card');

//Random number 
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Active cards

let chosenAncient;
let currentAncient =[];
let currentColode = {};
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
   // for (let key in card) {
     //   currentColode[key] = card[key];
    //}
    //console.log(currentColode);
});

});
console.log(chosenAncient);//test!!!

//difficult 
let chosenDiffucalty = 1;


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
      } else if (index === 2) {
        arrGreenCards = card.filter(element => element.color === 'green');
        arrBrownCards = card.filter(element => element.color === 'brown');
        arrBlueCards = card.filter(element => element.color === 'blue');
        //console.log(arrGreenCards);
      } else if (index === 3) {
        arrGreenCards = card.filter(element => element.color !== 'easy');
        arrBrownCards = card.filter(element => element.color !== 'easy');
        arrBlueCards = card.filter(element => element.color !== 'easy');
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

    let arrGreenCards;
    let arrBrownCards;
    let arrBlueCards;
    let greenLow = [];
  
    greens.forEach((el, id) => {
        el.textContent = currentAncient[id].greenCards;
        allGreen = allGreen + Number(el.textContent);
        //console.log(allGreen);
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
    
}
for (let i = 0; i < allBrown; i++){
    const randomCard = Math.floor(Math.random()*currentColode.brownCards.length);
    brownsArr.push(...currentColode.brownCards.splice(randomCard, 1));
    
}
for (let i = 0; i < allBlue; i++){
    const randomCard = Math.floor(Math.random()*currentColode.blueCards.length);
    bluesArr.push(...currentColode.blueCards.splice(randomCard, 1));
    
}
//console.log(bluesArr);
//console.log(greensArr);
//console.log(brownsArr);
let greenStagesOne = [];
let greenStagesTwo = [];
let greenStagesThree = [];

for (let i = 0; i < Number(firstGreen.textContent); i++) {
    greenStagesOne.push(greensArr.pop());
}
for (let i = 0; i < (Number(secondGreen.textContent)); i++) {
    greenStagesTwo.push(greensArr.pop());
}
for (let i = 0; i < Number(thirdGreen.textContent); i++) {
    greenStagesThree.push(greensArr.pop());
}
//console.log (greenStagesOne);
//console.log (greenStagesTwo);
//console.log (greenStagesThree);
//console.log(greensArr);
let blueStagesOne = [];
let blueStagesTwo = [];
let blueStagesThree =[];
for (let i = 0; i < Number(firstBlue.textContent); i++) {
    blueStagesOne.push(bluesArr.pop());
}
for (let i = 0; i < Number(secondBlue.textContent); i++) {
    blueStagesTwo.push(bluesArr.pop());
}
for (let i = 0; i < Number(thirdBlue.textContent); i++) {
    blueStagesThree.push(bluesArr.pop());
}
let brownStagesOne = [];
let brownStagesTwo = [];
let brownStagesThree =[];
for (let i = 0; i < Number(firstBrown.textContent); i++) {
    brownStagesOne.push(brownsArr.pop());
}
for (let i = 0; i < Number(secondBrown.textContent); i++) {
    brownStagesTwo.push(brownsArr.pop());
}
for (let i = 0; i < Number(thirdBrown.textContent); i++) {
    brownStagesThree.push(brownsArr.pop());
}



let firstDeck = [...greenStagesOne, ...blueStagesOne, ...brownStagesOne];
let secondDeck = [...greenStagesTwo, ...blueStagesTwo, ...brownStagesTwo];
let thirdDeck = [...greenStagesThree, ...blueStagesThree, ...brownStagesThree];

colode = [thirdDeck, secondDeck, firstDeck];
console.log(colode);


//console.log(firstDeck);
//console.log(secondDeck);
//console.log(thirdDeck);

});

colodeBtn.addEventListener('click', () => {
    let url = '';
    if (colode[2].length !==0) {
        let n = getRandomNum (0, (colode[2].length-1));
        url = colode[2][n];
        
        if (url.color === 'green') {
            firstGreen.textContent = `${Number(firstGreen.textContent) - 1}`;
        } else if (url.color === 'blue') {
            firstBlue.textContent = `${Number(firstBlue.textContent) - 1}`;
        } else if (url.color === 'brown') {
            firstBrown.textContent = `${Number(firstBrown.textContent) - 1}`;
        } 
        let temp = colode[2][n];
        colode[2][n] = colode[2][0];
        colode[2][0] = temp;

        colode[2].shift();

    } else if (colode[1].length !== 0) {
        let n = getRandomNum (0, (colode[1].length-1));
        url = colode[1][n];
        if (url.color === 'green') {
            secondGreen.textContent = `${Number(secondGreen.textContent) - 1}`;
        } else if (url.color === 'blue') {
            secondBlue.textContent = `${Number(secondBlue.textContent) - 1}`;
        } else if (url.color === 'brown') {
            secondBrown.textContent = `${Number(secondBrown.textContent) - 1}`;
        } 
        let temp = colode[1][n];
        colode[1][n] = colode[1][0];
        colode[1][0] = temp;
        
        colode[1].shift();
    } else if (colode[0].length > 1) {
        let n = getRandomNum (0, (colode[0].length-1));
        url = colode[0][n];
        if (url.color === 'green') {
            thirdGreen.textContent = `${Number(thirdGreen.textContent) - 1}`;
        } else if (url.color === 'blue') {
            thirdBlue.textContent = `${Number(thirdBlue.textContent) - 1}`;
        } else if (url.color === 'brown') {
            thirdBrown.textContent = `${Number(thirdBrown.textContent) - 1}`;
        } 
        let temp = colode[0][n];
        colode[0][n] = colode[0][0];
        colode[0][0] = temp;
        
        colode[0].shift();
    } else if (colode[0].length === 1) {
        colodeBtn.style.visibility = `hidden`;
        url = colode[0][0];
        if (url.color === 'green') {
            thirdGreen.textContent = `${Number(thirdGreen.textContent) - 1}`;
        } else if (url.color === 'blue') {
            thirdBlue.textContent = `${Number(thirdBlue.textContent) - 1}`;
        } else if (url.color === 'brown') {
            thirdBrown.textContent = `${Number(thirdBrown.textContent) - 1}`;
        } 
    }
    lastCard.style.background = `no-repeat center/cover url('${url.cardFace}')`;
    //console.log(url);
})



//

//Last card 







