const nome = "Davi Azevedo";

const paragrafo = <p>Tenho 23 anos, estudo desenvolvimento Web. Gosto do universo Star Wars e do MCU. 73 é o melhor número.</p>;

const h1 = <h1>{nome}</h1>

const aboutMe = () => {
    return (
        <div>{h1}{paragrafo}</div>
    );
}

export default aboutMe;
