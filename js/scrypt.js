console.log('Hello Word!');
//Import JS date file 
import difficulties from '../data/difficulties.js';
import ancientsdate from '../data/ancients.js';
import blueCards from '../data/mythicCards/blue/index.js';
import brownCards from '../data/mythicCards/brown/index.js';
import greenCards from '../data/mythicCards/green/index.js';
//Const_date 
const azathoth = document.getElementById('azathoth');
const cthulthu = document.getElementById('cthulthu');
const iogSothoth = document.getElementById('iogsothoth');
const ShubNiggurath = document.getElementById('shubniggurath');

const ancients = document.querySelectorAll('ancients');

let chosenAncient;
let currentAncient = [];
//Active cards
ancients.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        ancients.forEach(element => {
            element.classList.remove('active');
        });
        element.classList.add('active');
        chosenAncient = index;
        currentAncient.length = 0; 

    });
});

