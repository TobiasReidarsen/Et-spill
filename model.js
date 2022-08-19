let model = {
    // State
    tickNumber: 0,
    timer: null,
    tick: function(){
        model.tickNumber++;
        console.log(model.tickNumber);
        graphics.drawGame();
        model.timer = window.setTimeout("model.tick()", 1000)
    },

    // Content
    moneyCounter: 0,
    clickMeButton: "Klikk meg for cash!",
    

};