let cheeseCount = 0;

const totalCheeseCount = document.querySelector('.cheese-count');
const clickToGenerateCheeseResource = document.getElementById('cheeseResource');

clickToGenerateCheeseResource.addEventListener('click', () => {
mineCheese();
}); 

function mineCheese() {
    cheeseCount = cheeseCount + 1;
    totalCheeseCount.innerHTML = cheeseCount;
    console.log(cheeseCount)
    return cheeseCount;
}