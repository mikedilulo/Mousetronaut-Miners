let cheeseCount = 0;
let knivesCount = 0;
let cartsCount = 0;
let mousetronautsCount = 0;
let gratersCount = 0;

const upgrades = {
    cheeseKnives : {
        purchasePrice: 3,
        countModifier: 2,
        activated: false
    },

    cheeseCarts : {
        purchasePrice: 5,
        countModifier: 5,
        activated: false
    },

    mousetronauts: {
        purchasePrice: 7,
        countModifier: 8,
        activated: false
    },

    cheeseGraters : {
        purchasePrice: 10,
        countModifier: 12,
        activated: false
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

for(resource of upgradeContainers) {
    resource.classList.add('upgrade-display')
}

cheeseResourceGeneratorImage.addEventListener('click', () => {
    cheeseCount++
    cheeseGeneratedFromClick.innerText = cheeseCount;

    if(cheeseCount >= upgrades.cheeseKnives.purchasePrice) {
        upgradeContainers[0].classList.remove('upgrade-display')
        if(cheeseCount >= upgrades.cheeseKnives.purchasePrice) {
            cheeseKnifeUpgradeButton.disabled = false;
        }
    }

    if(cheeseCount >= upgrades.cheeseCarts.purchasePrice) {
        upgradeContainers[1].classList.remove('upgrade-display')
        if(cheeseCount >= upgrades.cheeseCarts.purchasePrice) {
            cheeseCartUpgradeButton.disabled = false;
        }
    }

    if(cheeseCount >=  upgrades.mousetronauts.purchasePrice) {
        upgradeContainers[2].classList.remove('upgrade-display')
        if(cheeseCount >= upgrades.mousetronauts.purchasePrice) {
            cheeseMousetronautUpgradeButton.disabled = false;
        }
    }

    if(cheeseCount >= upgrades.cheeseGraters.purchasePrice) {
        upgradeContainers[3].classList.remove('upgrade-display')
        if(cheeseCount >= upgrades.cheeseGraters.purchasePrice) {
            cheeseGraterUpgradeButton.disabled = false;
        }
    }
})

cheeseKnifeUpgradeButton.addEventListener('click', () => {
    knivesCount++;
    let upgradeKnifeResource = cheeseCount -= upgrades.cheeseKnives.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeKnifeResource;
    const knifeIconElement = `<i class="fa-solid fa-pen-nib" style='margin-right: 5px'></i>`
    knifeCount.innerHTML = knifeIconElement.repeat(knivesCount);
    purchaseUpgrade();
})

cheeseCartUpgradeButton.addEventListener('click', () => {
    cartsCount++;
    let upgradeCartResource = cheeseCount -= upgrades.cheeseCarts.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeCartResource;
    const cartIconElement = `<i class="fa-solid fa-cart-shopping" style='margin-right: 5px'></i>`
    cartCount.innerHTML = cartIconElement.repeat(cartsCount)
    purchaseUpgrade();
})

cheeseMousetronautUpgradeButton.addEventListener('click', () => {
    mousetronautsCount++;
    let upgradeMousetronautResource = cheeseCount -= upgrades.mousetronauts.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeMousetronautResource;
    const mousetronautIconElement = `<i class="fa-solid fa-house-user" style='margin-right: 5px'></i>`
    mousetronautCount.innerHTML = mousetronautIconElement.repeat(mousetronautsCount)
    purchaseUpgrade();
})

cheeseGraterUpgradeButton.addEventListener('click', () => {
    gratersCount++
    let upgradeGraterResource = cheeseCount -= upgrades.cheeseGraters.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeGraterResource;
    const graterIconElement = `<i class="fa-solid fa-torii-gate" style='margin-right: 5px'></i>`
    graterCount.innerHTML = graterIconElement.repeat(gratersCount)
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