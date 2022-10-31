const dollarContainer = document.getElementById("dollar");
const usdAmount = document.getElementById("usd-amount");

fetch("https://api.coindesk.com/v1/bpi/currentprice.json") // Esta api sale de la documentación de coindesk
    .then((response) => response.json()) // Hace un parseo de la respuesta a json
    .then((data) => displayData(data)); // Path: style.css

const displayData = (data) => {
    const usd = data.bpi.USD.rate_float; // Obtiene el valor de la moneda en USD
    usdAmount.textContent = `$${usd} USD`; // Muestra el valor de la moneda en USD
    const totalDollarItems = Math.ceil(usd / 1000); // Obtiene el número de items que se pueden comprar con el valor de la moneda en USD

    for (let i = 0; i < totalDollarItems; i++) {
        const newDollar = document.createElement("div"); // Crea un nuevo elemento div
        newDollar.setAttribute("style", `animation-delay:.${10 + i}s;`); // Agrega un delay a cada elemento div para que se vallan mostrando una x una
        newDollar.textContent = "$"; // Agrega el símbolo de dólar
        newDollar.setAttribute("class", "coin dollar-item"); // Agrega una clase al elemento div
        dollarContainer.appendChild(newDollar); // Agrega el elemento div al contenedor
    }
};

//