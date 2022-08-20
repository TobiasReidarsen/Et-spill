let model = {
    // State
    tickNumber: 0,
    timer: null,
    // tick: function () {
    //     model.tickNumber++;
    //     console.log(model.tickNumber);
    //     graphics.drawGame();
    //     model.timer = window.setTimeout("model.tick()", 1000)
    // },

    // Content
    moneyCounter: {value: 0, text: "BigBoyMoney!"},

    ///////////////////////////// Multipliers ////////////////////////////
    globalGenMulti: 1, // is for every generator
    automaticGenMulti: 1, // is just for automatic generators

    ///////////////////////////// Gen upgraders ///////////////////////////
    genUpgrader: 2,

    ///////////////////////////// Money generators /////////////////////////////////////
    moneyGenerators: [
        {
            genName: "firstGenPlaceholder",
            genText: "Placeholder Explains shit",
            genValue: 0.5,
            genCost: 20,
            genCostGrowth: 1.07,
            owned: 0,
            genUpgrader: 2
            //globalGenMulti,
            //automaticGenMulti,
        },
        {
            genName: "secondGenPlaceholder",
            genText: "Placeholder Explains shit",
            genValue: 5,
            genCost: 300,
            genCostGrowth: 1.09,
            owned: 0,
            upgrade: genUpgrader,
            //globalGenMulti,
            //automaticGenMulti,
        },
    ],
};

// Can just click on moneyCounter to make money