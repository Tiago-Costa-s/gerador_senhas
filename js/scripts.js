//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Novas funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

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
    //senha vazia
    let password = "";

    //segunda versão
    const passwordLength = +lengthInput.value;

    //recebe um arry com as funções de senha
    const generators = [];

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperrCase);
    }

    if (numbersInput.checked) {
        generators.push(getNumber);
    }

    if (symbolsInput.checked) {
        generators.push(getSymbol);
    }

    console.log(generators.length)
    if (generators.length === 0) {
        return;
    }

    //loop vezes igual ao tamanho da senha
    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            //vai recebendo cada caracter da senha
            password += randomValue;
        });
    }

    //ajusta o bug da senha com 12carcters para 10 caracteres.
    password = password.slice(0, passwordLength);

    //exibe o elemento campo de senha
    generatedPasswordElement.style.display = "block";

    //exbibe a senha
    generatedPasswordElement.querySelector("h4").innerText = password;
};

//Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperrCase, getNumber, getSymbol);
});

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});


copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText;

    console.log(password);

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso!";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        }, 1000);
    });
})