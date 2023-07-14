let cheeseCount = 0;

const cheeseResourceGenerator = document.getElementById('cheeseResource');
const cheeseGenerated = document.querySelector('.cheese-count');

cheeseResourceGenerator.addEventListener('click', () => {
    cheeseCount++
    cheeseGenerated.innerText = cheeseCount;
}) 