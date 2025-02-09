let cheeseCount = 0;
let totalCheeseCountCollected = 0;
let knifeCount = 0;
let cartCount = 0;
let mousetronautCount = 0;
let graterCount = 0;
let knifeMultiplier = 0;
let cartMultiplier = 0;
let mouseMultiplier = 0;
let graterMultiplier = 0;
let isAchievementAchieved = false;
let achievementCount = 0;

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
    },
    achievements: {
        isCheeseCollected: false
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

let isCheeseAchievement = gameUpgrades.achievements.isCheeseCollected;

const totalCheeseCount = document.querySelector('.cheese-count');
const clickToGenerateCheeseResource = document.getElementById('cheeseResource');
const allResourceUpgradeButtons = document.querySelectorAll('button');
const knifeUpgradeButton = document.querySelector('.cheese-knife-upgrade-btn');
const cartUpgradeButton = document.querySelector('.cheese-cart-upgrade-btn');
const mousetronautUpgradeButton = document.querySelector('.cheese-mousetronaut-upgrade-btn');
const graterUpgradeButton = document.querySelector('.cheese-grater-upgrade-btn');
let knifeUpgradeCount = document.querySelector('.number-of-knife-resources');
let cartUpgradeCount = document.querySelector('.number-of-cart-resources');
const maxMouseAutoUpgradeCount = document.querySelector('.mouse-max-auto-upgrade');
const maxGraterAutoUpgradeCount = document.querySelector('.grater-max-auto-upgrade');
const knifeModifierDisplay = document.querySelector('.knife-plus-cheese-modifier');
const cartModifierDisplay = document.querySelector('.cart-plus-cheese-modifier');
const mouseModifierDisplay = document.querySelector('.mouse-plus-cheese-modifier');
const graterModifierDisplay = document.querySelector('.grater-plus-cheese-modifier');
const totalCheeseMultiplierDisplay = document.querySelector('.cheese-stat-tcm-count');
const knifePurchasePriceDisplay = document.querySelector('.knife-purchase-price-display');
const cartPurchasePriceDisplay = document.querySelector('.cart-purchase-price-display');
const mousePurchasePriceDisplay = document.querySelector('.mouse-purchase-price-display');
const graterPurchasePriceDisplay = document.querySelector('.grater-purchase-price-display');
let totalCheeseCountCollectedDisplay = document.querySelector('.total-cheese-count-collected');
const achievementDisplay = document.querySelector('.achievement-display');
const achievementDisplaySection = document.querySelector('.achievement-display-section');

disableButtonsAtStart();
disableMaxAutoUpgrades();
hideIconsPerClickUpgrade();

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
    totalCheeseCountCollected++;
    totalCheeseCountCollected = totalCheeseCountCollected += (knifeClickModifier * knifeCount) + (cartClickModifier * cartCount) + (mousetronautAutoModifier * mousetronautCount) + (graterAutoModifier * graterCount);
    totalCheeseCountCollectedDisplay.innerHTML = totalCheeseCountCollected;
    cheeseCount++;
    cheeseCount = cheeseCount += (knifeClickModifier * knifeCount) + (cartClickModifier * cartCount) + (mousetronautAutoModifier * mousetronautCount) + (graterAutoModifier * graterCount);
    totalCheeseCount.innerHTML = cheeseCount;
    enableButtonsForUpgrades();
    isKnifeActivated();
    isCartActivated();
    isMousetronautActivated();
    isGraterActivated();
    enableAchievements();
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
    displayNumberOfResources();
    knifePurchasePrice = knifePurchasePrice *= Math.floor((knifeCount / 2) + 1);
    knifeClickModifier = Math.floor(knifeCount * knifeClickModifier / 2.25);
    notEnoughCheeseForClickResources();
    notEnoughCheeseForAutoResources();
    knifeMultiplier = (knifeClickModifier * knifeCount) + knifeClickModifier;
    totalCheeseMultiplierDisplay.innerHTML = knifeMultiplier + cartMultiplier + mouseMultiplier + graterMultiplier;
    changeIconsToUpgradeCount();
    knifePurchasePriceDisplay.innerHTML = knifePurchasePrice;
    return knifeMultiplier;
}


function purchaseCartUpgrade() {
    cartCount++;
    cartActivated = true;
    cheeseCount = cheeseCount -= cartPurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    displayNumberOfResources();
    cartPurchasePrice = cartPurchasePrice *= Math.floor((cartCount / 2) + 1);
    cartClickModifier = Math.floor(cartCount * cartClickModifier / 2.25);
    notEnoughCheeseForClickResources();
    notEnoughCheeseForAutoResources();
    cartMultiplier = (cartClickModifier * cartCount) + cartClickModifier;
    totalCheeseMultiplierDisplay.innerHTML = knifeMultiplier + cartMultiplier + mouseMultiplier + graterMultiplier;
    changeIconsToUpgradeCount();
    cartPurchasePriceDisplay.innerHTML = cartPurchasePrice;
    return cartMultiplier;
}

function purchaseCheeseMousetronautUpgrade() {
    mousetronautCount++;
    mousetronautDeactivated();
    mousetronautActivated = true;
    cheeseCount = cheeseCount -= mousetronautPurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    notEnoughCheeseForClickResources();
    notEnoughCheeseForAutoResources();
    setInterval(autoMouseUpgradeModifier, 5000)
    maxMouseAutoUpgradeCount.classList.remove('hide-upgrade-text-icons')
    maxMouseAutoUpgradeCount.classList.add('max-auto-upgrade')
    mousetronautAutoModifier = (mousetronautCount * mousetronautAutoModifier);
    mouseMultiplier = (mousetronautAutoModifier * mousetronautCount);
    totalCheeseMultiplierDisplay.innerHTML = knifeMultiplier + cartMultiplier + mouseMultiplier + graterMultiplier;
    mousePurchasePriceDisplay.innerHTML = mousetronautPurchasePrice
    return mouseMultiplier;
}

function purchaseGraterUpgrade() {
    console.log('clicked')
    graterCount++;
    graterDeactivated();
    graterActivated = true;
    cheeseCount = cheeseCount -= graterPurchasePrice;
    totalCheeseCount.innerHTML = cheeseCount;
    notEnoughCheeseForClickResources();
    notEnoughCheeseForAutoResources();
    setInterval(autoGraterUpgradeModifier, 3000);
    maxGraterAutoUpgradeCount.classList.remove('hide-upgrade-text-icons')
    maxGraterAutoUpgradeCount.classList.add('max-auto-upgrade')
    graterAutoModifier = (graterCount * graterAutoModifier);
    graterMultiplier = (graterAutoModifier * graterCount);
    totalCheeseMultiplierDisplay.innerHTML = knifeMultiplier + cartMultiplier + mouseMultiplier + graterMultiplier;
    return graterMultiplier;
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
        mousePurchasePriceDisplay.innerHTML = 'MAX PURCHASED';
    }
    return cheeseCount;
}

function isGraterActivated() {
    if(graterActivated) {
        cheeseCount = cheeseCount += graterAutoModifier;
        totalCheeseCount.innerHTML = cheeseCount;
        graterPurchasePriceDisplay.innerHTML = 'MAX PURCHASED';
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

function notEnoughCheeseForAutoResources() {
    if(cheeseCount < mousetronautPurchasePrice) {
        mousetronautUpgradeButton.disabled = true;
    }
    if(cheeseCount < graterPurchasePrice) {
        graterUpgradeButton.disabled = true;
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

function disableMaxAutoUpgrades() {
    if(mousetronautCount === 0) {
        maxMouseAutoUpgradeCount.classList.add('hide-upgrade-text-icons');
    }
    if(graterCount === 0) {
        maxGraterAutoUpgradeCount.classList.add('hide-upgrade-text-icons');
    }
}

function hideIconsPerClickUpgrade() {
    if(knifeCount === 0) {
        knifeUpgradeCount.classList.add('hide-upgrade-text-icons');
    }

    if(cartCount === 0) {
        cartUpgradeCount.classList.add('hide-upgrade-text-icons');
    }
}

function displayNumberOfResources() {
    if(knifeCount >= 1) {
        knifeUpgradeCount.classList.remove('hide-upgrade-text-icons');
        knifeUpgradeCount.innerHTML = `${'<i class="fa-solid fa-pen-nib"></i>'}`.repeat(knifeCount);
    }
    if(cartCount >= 1) {
        cartUpgradeCount.classList.remove('hide-upgrade-text-icons');
        cartUpgradeCount.innerHTML = `${'<i class="fa-solid fa-cart-shopping"></i>'}`.repeat(cartCount);
    }
}

function changeIconsToUpgradeCount() {
    if(knifeCount >= 11) {
        knifeUpgradeCount.innerHTML = knifeCount;
    }
    if(cartCount >= 11) {
        cartUpgradeCount.innerHTML = cartCount;
    }
}


// Achievements

function enableAchievements() {
    isAchievementAchieved;
    console.log('made it here')
    if(totalCheeseCountCollected >= 100) {
        isAchievementAchieved = true;
        achievementCount++;
        if(achievementCount === 1) {
            isAchievementAchieved = true;
            achievementDisplay.disabled = false;
            achievementDisplay.classList.add('achievement-accomplished')
            getColor();
            getRandomColor();
            achievementBody.style.backgroundColor = getColor() || getRandomColor();
            achievementWrapper.classList.remove("animation");
            setTimeout(() => achievementWrapper.classList.add("animation"), 200);
        }
    }
}

var achievementBody = document.querySelector(".achievement-body");
var achievementWrapper = document.querySelector(".achievement-wrapper");

var btn = document.getElementById("btn");

var COLORS = ["#2196F3", "#A791D4", "#FC7A50", "#5AB65D", "#03A9F4"];

function getColor() {
  var index = Math.floor(Math.random() * 6);

  return COLORS[index];
}

function getRandomColor() {
  var lum = -0.25;
  var hex = String(
    "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
        .toUpperCase()
  ).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}