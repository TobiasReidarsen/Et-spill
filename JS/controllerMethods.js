let generatorMethods = {
    // METHODS

    moneyMaker: function (number) {
        let addedMoney = generatorModel.moneyGens[number];

        if (generatorModel.currency.bigBoyMoney >= addedMoney.newPrice) {

            generatorModel.moneyGens[number].owned++;

            generatorModel.moneyGrowth += addedMoney.value;

            generatorModel.currency.bigBoyMoney -= addedMoney.newPrice;

            this.priceCalc(number);

            return;
        } else if (number == 0) {

            generatorModel.currency.bigBoyMoney += addedMoney.value;
            return;
        }
        console.log('Not enought cash');

        // ////////////////////////// NOT FINISHED
        //this.notEoughCash(number), 
        view();
    },

    priceCalc: function (number) {
        let price = generatorModel.moneyGens[number].price;
        let newPrice = generatorModel.moneyGens[number].newPrice;
        let growth = generatorModel.moneyGens[number].priceGrowth;
        let ownedGen = generatorModel.moneyGens[number].owned;


        generatorModel.moneyGens[number].newPrice = price * (growth ** ownedGen);
        console.log(`Prisen er nå: ${newPrice}`);



    },
/////////////////////////////// YEAH NOT FINISHED//////////////////////////////////////////////////////////
    notEoughCash: function (i) {


        if (generatorModel.currency.bigBoyMoney <= generatorModel.moneyGens[i].newPrice) {
            generatorModel.moneyGens[i].text = controllerData.failureToBuyMessage;
            generatorModel.moneyGens[i].newPrice = '';
        } else {
            generatorModel.moneyGens[i].ogText = generatorModel.moneyGens[i].text;
            view();
            //this.priceCalc(i);
        }

    },
//////////////////////////////////////////////////////////////////////////////////////////////////////
    tick: function () {
        controllerData.tickNumber++;
        generatorModel.currency.bigBoyMoney += generatorModel.moneyGrowth;
        view();
        //console.log(controllerData.tickNumber);
        controllerData.timer = window.setTimeout(generatorMethods.tick, 1000);
    },
}