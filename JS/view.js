

// VIEW
window.onload = function(){
view();
generatorMethods.tick();
}

function view(){
    app = document.getElementById("app");

    let html = /*HTML*/``;

    html += /*HTML*/`
            <h1>Big Boy Money: ${generatorModel.currency.bigBoyMoney}</h1>
            <button onclick="generatorMethods.moneyMaker(${generatorModel.moneyGens[0].value})">${generatorModel.moneyGens[0].text}</button></br></br>
        `;

    for(let i = 0; i < generatorModel.moneyGens.length; i++){
        if(generatorModel.moneyGens[i].unlocked){
            html += /*HTML*/`
            <button 
            class = "${generatorModel.moneyGens[i].class} ${generatorModel.moneyGens[i].id}"
            onclick = "generatorMethods.moneyMaker(${generatorModel.moneyGens[i].value})">
            ${generatorModel.moneyGens[i].text} price: ${generatorModel.moneyGens[i].price}</button>
            </br></br>
            `;
        }
    }


    app.innerHTML = html;
}