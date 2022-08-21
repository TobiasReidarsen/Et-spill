let generatorModel = {
    // DATA

    moneyGrowth: 0,

    currency: { bigBoyMoney: 0, },

    ////////////////// Multipliers //////////////////
    multipliers: { globalMulti: 1, },
    ////////////////////////////////////////////////

    ////////////////// money gens //////////////////
    moneyGens: [
        { class: "generator", id: "manualClicker", ogText: "Toil Away Clicker", text: "Toil Away Clicker", value: 1, owned: 1, unlocked: true },
        { class: "generator", id: "desperateClicker", ogText: "Desperate Clicker", text: "Desperate Clicker", value: 0.5, owned: 0, price: 20, newPrice: 20, priceGrowth: 1.07, unlocked: true },
        { class: "generator", id: "efficentClicker", ogText: "Efficent Clicker", text: "Efficent Clicker", value: 2, owned: 0, price: 150, newPrice: 150, priceGrowth: 1.08, unlocked: true },
        { class: "generator", id: "outsourcedClickfarm", ogText: "Outsourced Clickfarm", text: "Outsourced Clickfarm", value: 10, owned: 0, price: 700, newPrice: 700, priceGrowth: 1.09, unlocked: true },
        { class: "generator", id: "dumbAiClicker", ogText: "Dumb ai clicker", text: "Dumb ai clicker", value: 50, owned: 0, price: 3200, newPrice: 3200, priceGrowth: 1.06, unlocked: true },
    ],

}