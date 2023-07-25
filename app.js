let cheeseCount = 0;
let knifeCount = 0;
let cartCount = 0;
let mousetronautCount = 0;
let graterCount = 0;

const gameUpgrades = {
    knives: {
        purchasePrice: 5,
        clickModifier: 7,
        activated: false
    },
    carts: {
        purchasePrice: 15,
        clickModifier: 12,
        activated: false
    },
    mousetronauts: {
        purchasePrice: 50,
        autoModifier: 80,
        activated: false
    },
    graters: {
        purchasePrice: 500,
        autoModifier: 150,
        activated: false
    }
}

let knifePurchasePrice = gameUpgrades.knives.purchasePrice;
let knifeActivated = gameUpgrades.knives.activated;
let knifeClickModifier = gameUpgrades.knives.clickModifier;

let cartPurchasePrice = gameUpgrades.carts.purchasePrice;
let cartActivated = gameUpgrades.carts.activated;
let cartClickModifier = gameUpgrades.carts.clickModifier;

let mousetronautPurchasePrice = gameUpgrades.mousetronauts.purchasePrice;
let mousetronautActivated = gameUpgrades.mousetronauts.activated;
let mousetronautAutoModifier = gameUpgrades.mousetronauts.autoModifier;

let graterPurchasePrice = gameUpgrades.graters.purchasePrice;
let graterActivated = gameUpgrades.graters.activated;
let graterAutoModifier = gameUpgrades.graters.autoModifier;

const totalCheeseCount = document.querySelector('.cheese-count');
const clickToGenerateCheeseResource = document.getElementById('cheeseResource');
const allResourceUpgradeButtons = document.querySelectorAll('button');
const knifeUpgradeButton = document.querySelector('.cheese-knife-upgrade-btn');
const cartUpgradeButton = document.querySelector('.cheese-cart-upgrade-btn');
const mousetronautUpgradeButton = document.querySelector('.cheese-mousetronaut-upgrade-btn');
const graterUpgradeButton = document.querySelector('.cheese-grater-upgrade-btn');
const maxMouseAutoUpgradeCount = document.querySelector('.mouse-max-auto-upgrade');
const maxGraterAutoUpgradeCount = document.querySelector('.grater-max-auto-upgrade')

disableButtonsAtStart();
disableMaxUpgradeText();

clickToGenerateCheeseResource.addEventListener('click', () => {
mineCheese();
});

knifeUpgradeButton.addEventListener('click', () => {
    purchaseCheeseKnifeUpgrade();
})

cartUpgradeButton.addEventListener('click', () => {
    purchaseCartUpgrade();
})

mousetronautUpgradeButton.addEventListener('click', () => {
    purchaseCheeseMousetronautUpgrade();
})

graterUpgradeButton.addEventListener('click', () => {
    purchaseGraterUpgrade();
})

function mineCheese() {
    cheeseCount++;
    cheeseCount = cheeseCount += (knifeClickModifier * knifeCount) + (cartClickModifier * cartCount) + (mousetronautAutoModifier * mousetronautCount) + (graterAutoModifier * graterCount);
    totalCheeseCount.innerHTML = cheeseCount;
    enableButtonsForUpgrades();
    isKnifeActivated();
    isCartActivated();
    isMousetronautActivated();
}

function mousetronautDeactivated() {
    if(mousetronautCount > 0) {
        mousetronautUpgradeButton.disabled = true;
    }
}

function graterDeactivated() {
    if(graterCount > 0) {
        graterUpgradeButton.disabled = true;
    }
}

function disableButtonsAtStart() {
    for(upgrade of allResourceUpgradeButtons) {
        upgrade.disabled = true;
    }
}

function purchaseCheeseKnifeUpgrade() {
    knifeCount++;
    knifeActivated = true;
    cheeseCount = cheeseCount -= knifePurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    notEnoughCheeseForClickResources();
    return cheeseCount;
}

function purchaseCartUpgrade() {
    cartCount++;
    cartActivated = true;
    cheeseCount = cheeseCount -= cartPurchasePrice;
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
    setInterval(autoMouseUpgradeModifier, 5000)
    maxMouseAutoUpgradeCount.classList.remove('hide-max-upgrade')
    maxMouseAutoUpgradeCount.classList.add('max-auto-upgrade')
    return cheeseCount;
}

function purchaseGraterUpgrade() {
    graterCount++;
    graterDeactivated();
    graterActivated = true;
    cheeseCount = cheeseCount -= graterPurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    notEnoughCheeseForClickResources();
    setInterval(autoGraterUpgradeModifier, 3000);
    maxGraterAutoUpgradeCount.classList.remove('hide-max-upgrade')
    maxGraterAutoUpgradeCount.classList.add('max-auto-upgrade')
    return cheeseCount;
}

function enableButtonsForUpgrades() {
    if(cheeseCount >= knifePurchasePrice) {
        knifeUpgradeButton.disabled = false;
    }
    if(cheeseCount >= cartPurchasePrice) {
        cartUpgradeButton.disabled = false;
    }
    if(cheeseCount >= mousetronautPurchasePrice && mousetronautCount === 0) {
        mousetronautUpgradeButton.disabled = false;
    }
    if(cheeseCount >= graterPurchasePrice && graterCount === 0) {
        graterUpgradeButton.disabled = false;
    }
}

function isKnifeActivated() {
    if(knifeActivated) {
        cheeseCount = cheeseCount += knifeClickModifier;
        totalCheeseCount.innerHTML = cheeseCount;
    }
    return cheeseCount;
}

function isCartActivated() {
    if(cartActivated) {
        cheeseCount = cheeseCount += cartClickModifier;
        totalCheeseCount.innerHTML = cheeseCount;
    }
    return cheeseCount;
}

function isMousetronautActivated() {
    if(mousetronautActivated) {
        cheeseCount = cheeseCount += mousetronautAutoModifier;
        totalCheeseCount.innerHTML = cheeseCount;
    }
    return cheeseCount;
}

function isGraterActivated() {
    if(graterActivated) {
        cheeseCount = cheeseCount += graterAutoModifier;
        totalCheeseCount.innerHTML = cheeseCount;
    }
    return cheeseCount;
}

function notEnoughCheeseForClickResources() {
    if(cheeseCount < knifePurchasePrice) {
        knifeUpgradeButton.disabled = true;
    }
    if(cheeseCount < cartPurchasePrice) {
        cartUpgradeButton.disabled = true;
    }
}

function autoMouseUpgradeModifier() {
    totalCheeseCount.innerHTML = cheeseCount += mousetronautAutoModifier;
    enableButtonsForUpgrades();
}

function autoGraterUpgradeModifier() {
    totalCheeseCount.innerHTML = cheeseCount += graterAutoModifier;
    enableButtonsForUpgrades();
}

function disableMaxUpgradeText() {
    if(mousetronautCount === 0) {
        maxMouseAutoUpgradeCount.classList.add('hide-max-upgrade');
    }
    if(graterCount === 0) {
        maxGraterAutoUpgradeCount.classList.add('hide-max-upgrade');
    }
}