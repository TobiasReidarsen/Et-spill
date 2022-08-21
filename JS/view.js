

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
        `;

    for(let i = 0; i < generatorModel.moneyGens.length; i++){
        if(generatorModel.moneyGens[i].unlocked){
            html += /*HTML*/`
            <button 
            class = "${generatorModel.moneyGens[i].class} ${generatorModel.moneyGens[i].id}"
            onclick = "generatorMethods.moneyMaker(${i})">
            ${generatorModel.moneyGens[i].text} ${generatorModel.moneyGens[i].newPrice ? 'Price: ' + generatorModel.moneyGens[i].newPrice : ''}</button>

            `;
            if(i > 0){
                html += /*HTML*/`
                    <button>Uppgrade</button></br></br>
                `;
            } else {
                html += /*HTML*/`</br></br>`;
            }
        }
    }


    app.innerHTML = html;
}