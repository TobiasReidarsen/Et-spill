// MODEL

let app;


let bigBoyMoney = 0;

const gameSpeed = setInterval(genUpdator, 1000);

// For showing gens
let crumbGenGen = false;

// Prices for money generators
let crumbGenCost = 20;

// Base prices for money gens
let baseCrumbGenCost = 20

// How much a generator creates per tick
let crumbGenValue = 0;

// Base value for how much a generator creates per tick

let baseCrumbGenValue = 0.5;

// How many gens

let crumbGenNumb = 0;

// Production multipliers

let globalGenMulti = 1;

// Gen Upgraders cost
let crumbGenUpgradeCost = 10;

// VIEW 

view();
function view() {
    app = document.getElementById('app');

    let html = ``;
    html += /*HTML*/ `
    <h1>BigBoyMoney: ${Math.floor(bigBoyMoney)}</h1>
    <button onclick = "moneyMaker()">Klikk meg!</button>
    </br>
    `;

    if (crumbGenGen == true) {
        html += /*HTML*/ `
        <p>${crumbGenNumb} Automatically creates ${crumbGenValue} BigBoyMoney per second.</br> Welcome to the little leagues son</p>
        <button onclick = "crumbGen()">Crumbs of money. ${Math.floor(crumbGenCost)} money</button> <button onclick = "upgradeGen()">Upgrade!</button>
        `;
    };


    app.innerHTML = html;
};

// CONTROLLER

function genUpdator() {
    genUnlocker();

    bigBoyMoney += crumbGenValue;


    view();
};

function genUnlocker() {
    if (bigBoyMoney >= 20) {
        crumbGenGen = true;
    };
};

// Generators

function moneyMaker() {
    bigBoyMoney += 20;
    view();
};

function crumbGen() {
    if (bigBoyMoney >= crumbGenCost) {
        bigBoyMoney -= crumbGenCost;
        crumbGenCost = baseCrumbGenCost * (1.07 ** crumbGenNumb);
        crumbGenNumb++;
        crumbGenValue = (baseCrumbGenValue * crumbGenNumb) * globalGenMulti;
    };
    view();
};

function upgradeGen() {
    if (bigBoyMoney >= crumbGenUpgradeCost) {
        bigBoyMoney -= crumbGenUpgradeCost
        baseCrumbGenValue *= 2;
        crumbGenUpgradeCost *= 10;
        crumbGenValue = (baseCrumbGenValue * crumbGenNumb) * globalGenMulti;

    }
};