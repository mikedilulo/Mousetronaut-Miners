let cheeseCount = 0;

const cheeseResourceGeneratorImage = document.getElementById('cheeseResource');
const cheeseGeneratedFromClick = document.querySelector('.cheese-count');

cheeseResourceGeneratorImage.addEventListener('click', () => {
    cheeseCount++
    cheeseGeneratedFromClick.innerText = cheeseCount;
}) 