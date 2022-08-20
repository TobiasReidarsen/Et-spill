// MODEL

let app;


let bigBoyMoney = 0;

let moneyGrowth = 0;


// For showing gens
let crumbGenGen = false;

// Prices for money generators
let crumbGenCost = 20;

// Base prices for money gens
let baseCrumbGenCost = 20

// How much a generator creates per tick
let crumbGenValue = 0.5;

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
genUpdator();
function genUpdator() {
    genUnlocker();
    bigBoyMoney += moneyGrowth;


    view();
    setTimeout(genUpdator, 1000);
};

function genUnlocker() {
    if (bigBoyMoney >= crumbGenCost) {
        crumbGenGen = true;
    };
};

// Generators

function moneyMaker() {
    bigBoyMoney += 20;
    view();
};

function crumbGen(){
    if(crumbGenGen) {
        bigBoyMoney -= crumbGenCost;
        crumbGenNumb++;
        moneyGrowth += (crumbGenValue * crumbGenNumb)*globalGenMulti;
        crumbGenCost = baseCrumbGenCost *((1.07)**crumbGenNumb);
    }
    
}

// function crumbGen() {
//     if (bigBoyMoney >= crumbGenCost) {
//         bigBoyMoney -= crumbGenCost;
//         crumbGenCost = baseCrumbGenCost * (1.07 ** crumbGenNumb);
//         crumbGenNumb++;
//         crumbGenValue = (baseCrumbGenValue * crumbGenNumb) * globalGenMulti;
//     };
//     view();
// };

// function upgradeGen() {
//     if (bigBoyMoney >= crumbGenUpgradeCost) {
//         bigBoyMoney -= crumbGenUpgradeCost
//         baseCrumbGenValue *= 2;
//         crumbGenUpgradeCost *= 10;
//         crumbGenValue = (baseCrumbGenValue * crumbGenNumb) * globalGenMulti;

//     }
// };



/* 

Forskjellige tics. 
En for å oppdatere verdier som vises,
og en for logikk (som generators).

Istedenfor at alle gens ticker, så blir det de lager i sekunded legget til en global produksjon

let moneyEarnRate = 0;

first gen lager 0.5 money i sekunded

så: moneyEarnRate = 0.5;

kjøper man flere gens, så bare legges det på.

2 first gen, gir moneyEarnRate = 1;



BigBoyMoney kan være i sin egen funksjon.

for å øke BigBoyMoney, 

let money = 0;

function bigBoyMoneyFunc(money){
    money += money

}

function exampleGen(){
    bigBoyMoneyFunc();
}
*/