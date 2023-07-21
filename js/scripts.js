//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Funções
//letras, Números e Símbolos

//gera letras minusculas
function getLetterLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

//gera letras maiusculas
function getLetterUpperrCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

//gera os numeros
const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

//gera os simbolos
const getSymbol = () => {
    const symbols = "!@#$%&8()-=_,.;:/?[]-+|'<>";
    return symbols[Math.floor(Math.random() * symbols.length)];
};


const generatePassword = (getLetterLowerCase, getLetterUpperrCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperrCase,
        getNumber,
        getSymbol
    ];

    for (i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    console.log(password);

    console.log(generators);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

//Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperrCase, getNumber, getSymbol);
});