let cheeseCount = 0;

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

function mineCheese() {
    cheeseCount++;
    totalCheeseCount.innerHTML = cheeseCount;
    enableButtonsForUpgrades();
    isKnifeActivated();
}

function disableButtonsAtStart() {
    for(upgrade of allResourceUpgradeButtons) {
        upgrade.disabled = true;
    }
}

function purchaseCheeseKnifeUpgrade() {
    knifeActivated = true;
    cheeseCount -= knifePurchasePrice;
    mineCheese();
    return knifeActivated;
}

function enableButtonsForUpgrades() {
    if(cheeseCount >= knifePurchasePrice) {
        knifeUpgradeButton.disabled = false;
    }
}

function isKnifeActivated() {
    if(knifeActivated) {
        cheeseCount = cheeseCount += knifeClickModifier;
    }
}