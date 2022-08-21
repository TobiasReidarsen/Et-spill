let generatorMethods = {
    // METHODS

    moneyMaker: function (number) {
        let addedMoney = generatorModel.moneyGens[number];

        if (generatorModel.currency.bigBoyMoney >= addedMoney.price) {

            generatorModel.moneyGens[number].owned++;
            generatorModel.moneyGrowth += addedMoney.value;

            generatorModel.currency.bigBoyMoney -= addedMoney.price;

            this.priceCalc(number);

            return;
        } else if (number == 0) {

            generatorModel.currency.bigBoyMoney += addedMoney.value;
            return;
        }
        console.log('Not enought cash');
    },

    priceCalc: function (number){
        let price = generatorModel.moneyGens[number].price;
        let newPrice = generatorModel.moneyGens[number].newPrice;
        let growth = generatorModel.moneyGens[number].priceGrowth;
        let ownedGen = generatorModel.moneyGens[number].owned;


        generatorModel.moneyGens[number].newPrice = price * (growth ** ownedGen);
        console.log(`Prisen er nå: ${newPrice}`);



    },

    tick: function () {
        controllerData.tickNumber++;
        view();
        console.log(controllerData.tickNumber);
        controllerData.timer = window.setTimeout(generatorMethods.tick, 1000);
    },
}