let cheeseCount = 0;

const cheeseResourceGeneratorImage = document.getElementById('cheeseResource');
const cheeseGeneratedFromClicks = document.querySelector('.cheese-count');

cheeseResourceGeneratorImage.addEventListener('click', () => {
    cheeseCount++
    cheeseGeneratedFromClicks.innerText = cheeseCount;
}) 