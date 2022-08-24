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
      //использовать index для идентификации выбора 
      }
    );
});
console.log(chosenAncient);