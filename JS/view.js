

// VIEW
window.onload = function(){
view();
generatorMethods.tick();
}

function view(){
    let app = document.getElementById("app");
    let moneyGens = generatorModel.moneyGens;
    let html = /*HTML*/``;

    html += /*HTML*/`
            <div><h1>Big Boy Money: ${generatorModel.currency.bigBoyMoney}</h1></div>
            <div><p>Du tjener ${generatorModel.moneyGrowth} i sekundet</p></div>
        `;

    for(let i = 0; i < moneyGens.length; i++){
        if(moneyGens[i].unlocked){
            html += /*HTML*/`
            <div>
            <button 
            class = "${moneyGens[i].class} ${moneyGens[i].id}"
            onclick = "generatorMethods.moneyMaker(${i})">
            ${moneyGens[i].text} ${moneyGens[i].newPrice ? 'Price: ' + moneyGens[i].newPrice : ''}</button>
            Du har: ${moneyGens[i].owned} som tjener: ${moneyGens[i].value*moneyGens[i].owned} i sekundet
            </div>

            `;
            if(i > 0){
                html += /*HTML*/`
                    <div><button onclick="generatorMethods.upgrade(${i})">Upgrade price: ${generatorModel.moneyGens[i].upgradePrice}</button></div></br></br>
                `;
            } else {
                html += /*HTML*/`</br></br>`;
            }
        }
    }
    //generatorModel.moneyGens[i].owned

    app.innerHTML = html;
}