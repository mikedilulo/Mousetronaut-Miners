let cheeseCount = 0;
let knivesCount = 0;
let cartsCount = 0;
let mousetronautsCount = 0;
let gratersCount = 0;
let knifeCollectionAbilities = [];
let cartCollectionAbilities = [];
let mousetronautCollectionAbilities = [];
let graterCollectionAbilities = [];
let totalCollectionAbilities = [];
let knifeAbilityBonus = 0;
let cartAbilityBonus = 0;
let mousetronautAbilityBonus = 0;
let graterAbilityBonus = 0;
let totalCheeseAbilityBonus = 0;
let totalCheeseAbilityModifiers = 0;

const upgrades = {
    cheeseKnives : {
        purchasePrice: 2,
        countModifier: 3,
        activated: false
    },

    cheeseCarts : {
        purchasePrice: 5,
        countModifier: 8,
        activated: false
    },

    mousetronauts: {
        purchasePrice: 7,
        countModifier: 12,
        activated: false
    },

    cheeseGraters : {
        purchasePrice: 10,
        countModifier: 15,
        activated: false
    }
}

const superUpgrades = {
    mousetronautCheeseCollectionUpgrade: {
        purchasePrice: 0,
        mousetronautBonusAddition: upgrades.mousetronauts.countModifier + 88,
        activated: false
    },
    graterCheeseCollectionUpgrade: {
        purchasePrice: 0,
        graterBonusAddition: upgrades.cheeseGraters.countModifier + 185,
        activated: false
    }
}

console.log(superUpgrades.mousetronautCheeseCollectionUpgrade.mousetronautBonusAddition)
console.log(superUpgrades.graterCheeseCollectionUpgrade.graterBonusAddition)

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
const calculatedKnifeAbility = document.querySelector('.knife-ability-bonus-modifier')
const calculatedCartAbility = document.querySelector('.cart-ability-bonus-modifier')
const calculatedMousetronautAbility = document.querySelector('.mousetronaut-ability-bonus-modifier')
const calculatedGraterAbility = document.querySelector('.grater-ability-bonus-modifier')
let calculatedTotalAbility = document.querySelector('.total-ability-bonus-modifier')

for(resource of upgradeContainers) {
    resource.classList.add('upgrade-display')
}

cheeseResourceGeneratorImage.addEventListener('click', () => {
    totalCheeseAbilityBonus = cheeseCount++ + (knifeAbilityBonus + cartAbilityBonus + mousetronautAbilityBonus + graterAbilityBonus);
    cheeseGeneratedFromClick.innerText = cheeseCount += totalCheeseAbilityModifiers;
    

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

    if(mousetronautsCount === 0) {
        if(cheeseCount >= upgrades.mousetronauts.purchasePrice) {
            upgradeContainers[2].classList.remove('upgrade-display')
            if(cheeseCount >= upgrades.mousetronauts.purchasePrice) {
                cheeseMousetronautUpgradeButton.disabled = false;
            }
        }
    } else {
        cheeseMousetronautUpgradeButton.disabled = true;
    }

    if(gratersCount === 0) {
        if(cheeseCount >= upgrades.cheeseGraters.purchasePrice) {
            upgradeContainers[3].classList.remove('upgrade-display')
            if(cheeseCount >= upgrades.cheeseGraters.purchasePrice) {
                cheeseGraterUpgradeButton.disabled = false;
            }
        } 
    } else {
        cheeseGraterUpgradeButton.disabled = true;
    }
})

cheeseKnifeUpgradeButton.addEventListener('click', () => {
    knivesCount++;
    let upgradeKnifeResource = cheeseCount -= upgrades.cheeseKnives.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeKnifeResource;
    const knifeIconElement = `<i class="fa-solid fa-pen-nib" style='margin-right: 5px'></i>`
    knifeCount.innerHTML = knifeIconElement.repeat(knivesCount);
    upgrades.cheeseKnives.purchasePrice = upgrades.cheeseKnives.purchasePrice * 2;
    purchaseUpgrade();
    knifeAbilityEnhancement();
})

cheeseCartUpgradeButton.addEventListener('click', () => {
        cartsCount++;
        let upgradeCartResource = cheeseCount -= upgrades.cheeseCarts.purchasePrice
        cheeseGeneratedFromClick.innerText = upgradeCartResource;
        const cartIconElement = `<i class="fa-solid fa-cart-shopping" style='margin-right: 5px'></i>`
        cartCount.innerHTML = cartIconElement.repeat(cartsCount)
        upgrades.cheeseCarts.purchasePrice = upgrades.cheeseCarts.purchasePrice * 2;
        purchaseUpgrade();
        cartAbilityEnhancement();
})

cheeseMousetronautUpgradeButton.addEventListener('click', () => {
    mousetronautsCount++;
    let upgradeMousetronautResource = cheeseCount -= upgrades.mousetronauts.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeMousetronautResource;
    const mousetronautIconElement = `<span>Upgrade Completed</span>`
    mousetronautCount.innerHTML = mousetronautIconElement
    upgrades.mousetronauts.purchasePrice = upgrades.mousetronauts.purchasePrice * 2;
    purchaseUpgrade();
    mousetronautAbilityEnhancement();
})

cheeseGraterUpgradeButton.addEventListener('click', () => {
    gratersCount++
    let upgradeGraterResource = cheeseCount -= upgrades.cheeseGraters.purchasePrice
    cheeseGeneratedFromClick.innerText = upgradeGraterResource;
    const graterIconElement = `<span>Upgrade Completed</span>`
    graterCount.innerHTML = graterIconElement
    upgrades.cheeseGraters.purchasePrice = upgrades.cheeseGraters.purchasePrice * 2;
    purchaseUpgrade();
    graterAbilityEnhancement();
})

function purchaseUpgrade() {
    if(cheeseKnifeUpgradeButton && cheeseCount < upgrades.cheeseKnives.purchasePrice) {
        cheeseKnifeUpgradeButton.disabled = true;
        upgrades.cheeseKnives.activated = true;
    }

    if(cheeseCartUpgradeButton && cheeseCount < upgrades.cheeseCarts.purchasePrice) {
        cheeseCartUpgradeButton.disabled = true;
        upgrades.cheeseCarts.activated = true;
    }

    if(cheeseMousetronautUpgradeButton && cheeseCount < upgrades.mousetronauts.purchasePrice) {
        cheeseMousetronautUpgradeButton.disabled = true;
        upgrades.mousetronauts.activated = true;
    }

    if(cheeseGraterUpgradeButton && cheeseCount < upgrades.cheeseGraters.purchasePrice) {
        cheeseGraterUpgradeButton.disabled = true;
        upgrades.cheeseGraters.activated = true;
    }
}


function knifeAbilityEnhancement() {
    if(upgrades.cheeseKnives.activated) {
        cheeseCount - upgrades.cheeseKnives.purchasePrice;
        knifeCollectionAbilities.push(upgrades.cheeseKnives.countModifier);
        calculateKnifeBonus();
        calculateTotalCheeseBonus();
    }
}

function cartAbilityEnhancement() {
    if(upgrades.cheeseCarts.activated) {
        cheeseCount - upgrades.cheeseCarts.purchasePrice;
        cartCollectionAbilities.push(upgrades.cheeseCarts.countModifier);
        calculateCartBonus();
        calculateTotalCheeseBonus();
    }
}

function mousetronautAbilityEnhancement() {
    if(upgrades.mousetronauts.activated) {
        cheeseCount - upgrades.mousetronauts.purchasePrice;
        mousetronautCollectionAbilities.push(upgrades.mousetronauts.countModifier);
        calculateMousetronautBonus();
        calculateTotalCheeseBonus();
    }
    cheeseMousetronautUpgradeButton.disabled = true;
}

function graterAbilityEnhancement() {
    if(upgrades.cheeseGraters.activated) {
        cheeseCount - upgrades.cheeseGraters.purchasePrice;
        graterCollectionAbilities.push(upgrades.cheeseGraters.countModifier);
        calculateGratersBonus();
        calculateTotalCheeseBonus();
    }
    cheeseGraterUpgradeButton.disabled = true;
}

function calculateKnifeBonus() {
    knifeAbilityBonus = knifeCollectionAbilities.reduce((total, accumulator) => total + accumulator)
    calculatedKnifeAbility.innerText = knifeAbilityBonus;
    totalCollectionAbilities.push(knifeAbilityBonus);
    return knifeAbilityBonus;
}

function calculateCartBonus() {
    cartAbilityBonus = cartCollectionAbilities.reduce((total, accumulator) => total + accumulator)
    calculatedCartAbility.innerText = cartAbilityBonus;
    totalCollectionAbilities.push(cartAbilityBonus);
    return cartAbilityBonus;
}

function calculateMousetronautBonus() {
    mousetronautAbilityBonus = mousetronautCollectionAbilities.reduce((total, accumulator) => total + accumulator)
    calculatedMousetronautAbility.innerText = mousetronautAbilityBonus;
    totalCollectionAbilities.push(mousetronautAbilityBonus);
    return mousetronautAbilityBonus;
}

function calculateGratersBonus() {
    graterAbilityBonus = graterCollectionAbilities.reduce((total, accumulator) => total + accumulator)
    calculatedGraterAbility.innerText = graterAbilityBonus;
    totalCollectionAbilities.push(graterAbilityBonus);
    return graterAbilityBonus;
}

function calculateTotalCheeseBonus() {
    totalCheeseAbilityModifiers = totalCollectionAbilities.reduce((total, accumulator) => total + accumulator)
    calculatedTotalAbility.innerText = totalCheeseAbilityModifiers;
    return totalCheeseAbilityModifiers;
}

// function cartAutomaticUpgrade() {
//     if(cheeseCount >= upgrades.cheeseCarts.purchasePrice) {
//         let upgradeCartResource = cheeseCount -= upgrades.cheeseCarts.purchasePrice
//         cheeseGeneratedFromClick.innerText = upgradeCartResource;
//         cartsCount++;
//         const cartIconElement = `<i class="fa-solid fa-cart-shopping" style='margin-right: 5px'></i>`
//         cartCount.innerHTML = cartIconElement.repeat(cartsCount)
//         upgrades.cheeseCarts.purchasePrice = upgrades.cheeseCarts.purchasePrice * 2;
//         purchaseUpgrade();
//         cartAbilityEnhancement();
//     }
// }

// function haltAutomaticUpgrade() {
//     clearInterval(cartAutomaticUpgrade());
// }

    // setInterval(cartAutomaticUpgrade, 3000);

// haltAutomaticUpgrade();
