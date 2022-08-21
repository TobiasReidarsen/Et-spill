let generatorMethods = {
    // METHODS

    moneyMaker: function (number) {
        number = number * generatorModel.multipliers.globalMulti;
        generatorModel.currency.bigBoyMoney += number;

        view();
        //ookies = cookies + number;
    },

    tick: function() {
        controllerData.tickNumber++;
        view();
        console.log(controllerData.tickNumber);
        controllerData.timer = window.setTimeout(generatorMethods.tick, 1000);
    },
}