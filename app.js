let cheeseCount = 0;
let knivesCount = 0;
let cartsCount = 0;
let mousetronautsCount = 0;
let gratersCount = 0;

const upgrades = {
    cheeseKnives : {
        purchasePrice: 3,
        countModifier: 2,
    },

    cheeseCarts : {
        purchasePrice: 5,
        countModifier: 5,
    },

    mousetronauts: {
        purchasePrice: 7,
        countModifier: 10,
    },

    cheeseGraters : {
        purchasePrice: 10,
        countModifier: 25,
    }
}

const cheeseResourceGeneratorImage = document.getElementById('cheeseResource');
let cheeseGeneratedFromClick = document.querySelector('.cheese-count');
const cheeseKnifeUpgradeButton = document.querySelector('.cheese-knife-upgrade-btn');
const cheeseCartUpgradeButton = document.querySelector('.cheese-cart-upgrade-btn');
const cheeseMousetronautUpgradeButton = document.querySelector('.cheese-mousetronaut-upgrade-btn');
const cheeseGraterUpgradeButton = document.querySelector('.cheese-grater-upgrade-btn');
const knifeCount = document.querySelector('.knives-count');
const cartCount = document.querySelector('.carts-count');
const mousetronautCount = document.querySelector('.mousetronauts-count');
const graterCount = document.querySelector('.graters-count');
const allResourceUpgradeButtons = document.querySelectorAll('button');
const upgradeContainers = document.querySelectorAll('.upgrade-container')

for(resource of allResourceUpgradeButtons) {
    resource.disabled = true;
}

cheeseResourceGeneratorImage.addEventListener('click', () => {
    cheeseCount++
    cheeseGeneratedFromClick.innerText = cheeseCount;
    if(cheeseCount >= upgrades.cheeseKnives.purchasePrice) {
        cheeseKnifeUpgradeButton.disabled = false;
    }
    if(cheeseCount >= upgrades.cheeseCarts.purchasePrice) {
        cheeseCartUpgradeButton.disabled = false;
    }
    if(cheeseCount >= upgrades.mousetronauts.purchasePrice) {
        cheeseMousetronautUpgradeButton.disabled = false;
    }
    if(cheeseCount >= upgrades.cheeseGraters.purchasePrice) {
        cheeseGraterUpgradeButton.disabled = false;
    }
})

cheeseKnifeUpgradeButton.addEventListener('click', () => {
    knivesCount++;
    knifeCount.innerText = knivesCount;
    let upgradeKnifeResource = cheeseCount -= upgrades.cheeseKnives.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeKnifeResource;
    purchaseUpgrade();
})

cheeseCartUpgradeButton.addEventListener('click', () => {
    cartsCount++;
    cartCount.innerText = cartsCount;
    let upgradeCartResource = cheeseCount -= upgrades.cheeseCarts.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeCartResource; 
    purchaseUpgrade();
})

cheeseMousetronautUpgradeButton.addEventListener('click', () => {
    mousetronautsCount++;
    mousetronautCount.innerText = mousetronautsCount;
    let upgradeMousetronautResource = cheeseCount -= upgrades.mousetronauts.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeMousetronautResource;
    purchaseUpgrade();
})

cheeseGraterUpgradeButton.addEventListener('click', () => {
    gratersCount++
    graterCount.innerText = gratersCount;
    let upgradeGraterResource = cheeseCount -= upgrades.cheeseGraters.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeGraterResource;
    purchaseUpgrade();
})

function purchaseUpgrade() {
    if(cheeseKnifeUpgradeButton && cheeseCount < upgrades.cheeseKnives.purchasePrice) {
        cheeseCount - upgrades.cheeseKnives.purchasePrice;
        cheeseKnifeUpgradeButton.disabled = true;
    }
    if(cheeseCartUpgradeButton && cheeseCount < upgrades.cheeseCarts.purchasePrice) {
        cheeseCount - upgrades.cheeseCarts.purchasePrice;
        cheeseCartUpgradeButton.disabled = true;
    }
    if(cheeseMousetronautUpgradeButton && cheeseCount < upgrades.mousetronauts.purchasePrice) {
        cheeseCount - upgrades.mousetronauts.purchasePrice;
        cheeseMousetronautUpgradeButton.disabled = true;
    }
    if(cheeseGraterUpgradeButton && cheeseCount < upgrades.cheeseGraters.purchasePrice) {
        cheeseCount - upgrades.cheeseGraters.purchasePrice;
        cheeseGraterUpgradeButton.disabled = true;
    }
}