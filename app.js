let cheeseCount = 0;
let mousetronautCount = 0;

const gameUpgrades = {
    knives: {
        purchasePrice: 5,
        clickModifier: 7,
        activated: false
    },
    mousetronauts: {
        purchasePrice: 7,
        clickModifer: 10,
        activated: false
    }
}

let knifePurchasePrice = gameUpgrades.knives.purchasePrice;
let knifeActivated = gameUpgrades.knives.activated;
let knifeClickModifier = gameUpgrades.knives.clickModifier;
let mousetronautPurchasePrice = gameUpgrades.mousetronauts.purchasePrice;
let mousetronautActivated = gameUpgrades.mousetronauts.activated;
let mousetronautClickModifier = gameUpgrades.mousetronauts.clickModifer;

const totalCheeseCount = document.querySelector('.cheese-count');
const clickToGenerateCheeseResource = document.getElementById('cheeseResource');
const allResourceUpgradeButtons = document.querySelectorAll('button');
const knifeUpgradeButton = document.querySelector('.cheese-knife-upgrade-btn');
const mousetronautUpgradeButton = document.querySelector('.cheese-mousetronaut-upgrade-btn')

disableButtonsAtStart();

clickToGenerateCheeseResource.addEventListener('click', () => {
mineCheese();
});

knifeUpgradeButton.addEventListener('click', () => {
    purchaseCheeseKnifeUpgrade();
})

mousetronautUpgradeButton.addEventListener('click', () => {
    purchaseCheeseMousetronautUpgrade();
})

function mineCheese() {
    cheeseCount++;
    totalCheeseCount.innerHTML = cheeseCount;
    enableButtonsForUpgrades();
    isKnifeActivated();
    isMousetronautActivated();
}

function mousetronautDeactivated() {
    if(mousetronautCount > 0) {
        mousetronautUpgradeButton.disabled = true;
    }
}

function disableButtonsAtStart() {
    for(upgrade of allResourceUpgradeButtons) {
        upgrade.disabled = true;
    }
}

function purchaseCheeseKnifeUpgrade() {
    knifeActivated = true;
    cheeseCount = cheeseCount -= knifePurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    notEnoughCheeseForClickResources();
    return cheeseCount;
}

function purchaseCheeseMousetronautUpgrade() {
    mousetronautCount++;
    mousetronautDeactivated();
    mousetronautActivated = true;
    cheeseCount = cheeseCount -= mousetronautPurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    notEnoughCheeseForClickResources();
    return cheeseCount;
}

function enableButtonsForUpgrades() {
    if(cheeseCount >= knifePurchasePrice) {
        knifeUpgradeButton.disabled = false;
    }
    if(cheeseCount >= mousetronautPurchasePrice && mousetronautCount === 0) {
        mousetronautUpgradeButton.disabled = false;
    }
}

function isKnifeActivated() {
    if(knifeActivated) {
        cheeseCount = cheeseCount += knifeClickModifier;
        totalCheeseCount.innerHTML = cheeseCount;
    }
    return cheeseCount;
}

function isMousetronautActivated() {
    if(mousetronautActivated) {
        cheeseCount = cheeseCount += mousetronautClickModifier;
        totalCheeseCount.innerHTML = cheeseCount;
    }
    return cheeseCount;
}

function notEnoughCheeseForClickResources() {
    if(cheeseCount < knifePurchasePrice) {
        knifeUpgradeButton.disabled = true;
    }
}