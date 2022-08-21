let generatorModel = {
    // DATA
    
    currency: { bigBoyMoney: 0, },

    ////////////////// Multipliers //////////////////
    multipliers: { globalMulti: 1, },
    ////////////////////////////////////////////////

    ////////////////// money gens //////////////////
    moneyGens: [
        { class: "generator", id: "manualClicker", text: "Toil Away Clicker", value: 1, owned: 1, },
        { class: "generator", id: "desperateClicker", text: "Desperate Clicker", value: 0.5, owned: 0, price: 20, unlocked: true },
        { class: "generator", id: "efficentClicker", text: "Efficent Clicker", value: 2, owned: 0, price: 150, unlocked: false },
        { class: "generator", id: "outsourcedClickfarm", text: "Outsourced Clickfarm", value: 10, owned: 0, price: 700, unlocked: false },
        { class: "generator", id: "dumbAiClicker", text: "Dumb ai clicker", value: 50, owned: 0, price: 3200, unlocked: false },
    ],
    

}