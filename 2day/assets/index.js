const checkNumbers = document.querySelector("#checkNumbers"),
    checkLowercase = document.querySelector("#checkLowercase"),
    checkUppercase = document.querySelector("#checkUppercase"),
    checkSymbols = document.querySelector("#checkSymbols"),
    passLength = document.querySelector("#passLength"),
    passLengthText = document.querySelector("#passLengthText"),
    passInput = document.querySelector("#passInput"),
    passRegenerate = document.querySelector("#passRegenerate");

const symbols = "!\";#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

passLength.oninput = () => {
    passGenerate();
    passLengthText.textContent = passLength.value;
};

function passGenerate() {
    let passwordSymbols = "";

    if (checkNumbers.checked) {
        passwordSymbols += numbers;
    }

    if (checkLowercase.checked) {
        passwordSymbols += lowercase;
    }

    if (checkUppercase.checked) {
        passwordSymbols += uppercase;
    }

    if (checkSymbols.checked) {
        passwordSymbols += symbols;
    }

    let password = "";

    for (let i = 0; i < passLength.value; i++) {
        password += getRandomCharacter(passwordSymbols);
    }

    passInput.value = password;

    console.log(password);
}

function getRandomCharacter(characterString) {
    const randomIndex = Math.floor(Math.random() * characterString.length);
    return characterString[randomIndex];
}

checkNumbers.onchange = passGenerate;
checkLowercase.onchange = passGenerate;
checkUppercase.onchange = passGenerate;
checkSymbols.onchange = passGenerate;

passRegenerate.onclick = passGenerate;

document.addEventListener("DOMContentLoaded", passGenerate);
