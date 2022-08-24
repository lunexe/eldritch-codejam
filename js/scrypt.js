console.log('Hello Word!');
//Import JS date file 
import difficulties from '../data/difficulties.js';
import ancientsDate from '../data/ancients.js';
import blueCards from '../data/mythicCards/blue/index.js';
import brownCards from '../data/mythicCards/brown/index.js';
import greenCards from '../data/mythicCards/green/index.js';
//Const_date 
const azathoth = document.getElementById('azathoth');
const cthulthu = document.getElementById('cthulthu');
const iogSothoth = document.getElementById('iogsothoth');
const shubNiggurath = document.getElementById('shubniggurath');

const ancients = document.querySelectorAll('.ancients__item');
const levels = document.querySelector('.levels__buttons');
const difficult = document.querySelectorAll('.buttons__iteam');


//Active cards

let chosenAncient;
let currentAncient =[];
ancients.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        ancients.forEach(element => {
        element.style.border = "none";
    });
      element.style.border = "solid 2px red";
      levels.style.visibility = `visible`;
      chosenAncient = index;
      currentAncient.length = 0;
      }
    );
});

//difficult 
let chosenDiffucalty;

difficult.forEach((element ,index) => {
    element.addEventListener('click', (e) => {
      difficult.forEach(element => {
        element.classList.remove('active');
      });
      chosenDiffucalty = index;
      e.target.classList.add('active');
    });
  });
//Random number 
  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



