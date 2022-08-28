console.log('Hello Word!');
//Import JS date file 
import difficulties from '../data/difficulties.js';
import ancientsData from '../data/ancients.js';
import blueCards from '../data/mythicCards/blue/index.js';
import brownCards from '../data/mythicCards/brown/index.js';
import greenCards from '../data/mythicCards/green/index.js';
import cards from '../js/cardsdata.js';//all cards 


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
  
});
});
console.log(chosenAncient);//test!!!

//difficult 
let chosenDiffucalty;


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
        arrGreenCards = greenCards.filter(element => element.difficulty === 'easy');
        arrBrownCards = brownCards.filter(element => element.difficulty === 'easy');
        arrBlueCards = blueCards.filter(element => element.difficulty === 'easy');
      } else if  (index === 1) {
        arrGreenCards = greenCards.filter(element => element.difficulty === 'normal');
        arrBrownCards = brownCards.filter(element => element.difficulty === 'normal');
        arrBlueCards = blueCards.filter(element => element.difficulty === 'normal');
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

let allGreen = 0;
let allBlue = 0;
let allBrown =0;

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
      for (let i=0; i < allGreen; i++) {
        const random = Math.floor(Math.random()*2);
        
      }
      console.log(greensArr);
});
// 

//Random number 
  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//

//Last card 
const lastCard = document.querySelector('.last__card');


//Dots data 


