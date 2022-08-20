

// VIEW
window.onload = function(){
view();
}

function view(){
    app = document.getElementById("app");

    let html = /*HTML*/``;

    html += /*HTML*/`
        <h1>${model.currency.cookies}</h1>
        <button onclick = "model.cookieClick(1)">Click</button>
    `;

    app.innerHTML = html;
}