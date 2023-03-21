const api = 'https://api.coincap.io/v2/assets';

const ol = document.querySelector('#crypto-list');

async function getArrayFromApi () {
    const response = await fetch(api)
    const result = await response.json();
    const arrayOfCryptos = result.data;

    console.log(arrayOfCryptos);
    arrayOfCryptos.filter((element, index) => {
        if (index <= 9) {
            let newLi = document.createElement('li');
            newLi.innerText = `${element.name} (${element.symbol}): US$ ${parseFloat(element.priceUsd).toFixed(2)}`;
            ol.appendChild(newLi);
        }
    });
}

getArrayFromApi();
