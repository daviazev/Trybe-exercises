// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
    const mars = {
        name: 'Mars',
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 12000);
};

console.log('Iniciando contagem regressiva!!!');

setTimeout(() => console.log('10'), 1000);
setTimeout(() => console.log('9'), 2000);
setTimeout(() => console.log('8'), 3000);
setTimeout(() => console.log('7'), 4000);
setTimeout(() => console.log('6'), 5000);
setTimeout(() => console.log('5'), 6000);
setTimeout(() => console.log('4'), 7000);
setTimeout(() => console.log('3'), 8000);
setTimeout(() => console.log('2'), 9000);
setTimeout(() => console.log('1'), 10000);

setTimeout(() => console.log('Olha o planeta aparecendooooo!'), 11000)

getPlanet();
