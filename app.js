let cheeseCount = 0;
let knivesCount = 0;
let cartsCount = 0;
let mousetronautsCount = 0;
let gratersCount = 0;

const upgrades = {
    cheeseKnives : {
        purchasePrice: 25,
        countModifier: 2 
    },

    cheeseCarts : {
        purchasePrice: 100,
        countModifier: 5
    },

    mousetronauts: {
        purchasePrice: 500,
        countModifier: 10
    },

    cheeseGraters : {
        purchasePrice: 1000,
        countModifier: 25
    }
}

const cheeseResourceGeneratorImage = document.getElementById('cheeseResource');
const cheeseGeneratedFromClick = document.querySelector('.cheese-count');
const cheeseKnifeUpgradeButton = document.querySelector('.cheese-knife-upgrade-btn');
const cheeseCartUpgradeButton = document.querySelector('.cheese-cart-upgrade-btn');
const cheeseMousetronautUpgradeButton = document.querySelector('.cheese-mousetronaut-upgrade-btn');
const cheeseGraterUpgradeButton = document.querySelector('.cheese-grater-upgrade-btn');
const knifeCount = document.querySelector('.knives-count');
const cartCount = document.querySelector('.carts-count');
const mousetronautCount = document.querySelector('.mousetronauts-count');
const graterCount = document.querySelector('.graters-count');

cheeseResourceGeneratorImage.addEventListener('click', () => {
    cheeseCount++
    cheeseGeneratedFromClick.innerText = cheeseCount;
})

cheeseKnifeUpgradeButton.addEventListener('click', () => {
    knivesCount++;
    knifeCount.innerText = knivesCount;
})

cheeseCartUpgradeButton.addEventListener('click', () => {
    cartsCount++;
    cartCount.innerText = cartsCount;
})

cheeseMousetronautUpgradeButton.addEventListener('click', () => {
    mousetronautsCount++;
    mousetronautCount.innerText = mousetronautsCount;
})

cheeseGraterUpgradeButton.addEventListener('click', () => {
    gratersCount++
    graterCount.innerText = gratersCount;
})