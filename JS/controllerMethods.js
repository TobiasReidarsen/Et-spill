let generatorMethods = {
    // METHODS

    tick: function () {
        controllerData.tickNumber++;
        generatorModel.currency.bigBoyMoney += generatorModel.moneyGrowth;
        generatorMethods.unlocked();
        view();
        controllerData.timer = window.setTimeout(generatorMethods.tick, 1000);
    },

    moneyMaker: function (number) {
        let addedMoney = generatorModel.moneyGens[number];

        if (generatorModel.currency.bigBoyMoney >= addedMoney.price) {

            generatorModel.moneyGens[number].owned++;
            generatorModel.moneyGrowth += addedMoney.value;

            generatorModel.currency.bigBoyMoney -= addedMoney.price;

            this.genBuyPriceCalc(number);

            return;
        } else if (number === 0) {

            generatorModel.currency.bigBoyMoney += addedMoney.value;
            return;
        }
        console.log('Not enough cash');
    },

    genBuyPriceCalc: function (number){
        let price = generatorModel.moneyGens[number].price;
        let growth = generatorModel.moneyGens[number].priceGrowth;
        let ownedGen = generatorModel.moneyGens[number].owned;


        generatorModel.moneyGens[number].newPrice = price * (growth ** ownedGen);

    },

    upgrade: function (number) {

        if(generatorModel.currency.bigBoyMoney > generatorModel.moneyGens[number].upgradePrice){
            generatorModel.moneyGrowth -= generatorModel.moneyGens[number].value;
            generatorModel.moneyGrowth += generatorModel.moneyGens[number].value *= 2;
            generatorModel.currency.bigBoyMoney -= generatorModel.moneyGens[number].upgradePrice;
            generatorModel.moneyGens[number].upgradePrice = generatorModel.moneyGens[number].upgradePrice*2;
        } else {
            console.log("Not enough money");
        }
    },


    unlocked: function () {
        for (let i = 0; i < generatorModel.moneyGens.length; i++){
            if (generatorModel.currency.bigBoyMoney > generatorModel.moneyGens[i].price){
                generatorModel.moneyGens[i].unlocked = true;
            }
        }
    },
}
