
const numbers = [];
const userNumbers = [];
let x;
let attempts = 0; // اضافه کردن متغیر attempts

function generateNumbers() {
    numbers[0] = Math.floor(Math.random() * 9 + 1);

    let r;

    while (numbers.length != 4) {
        r = Math.floor(Math.random() * 9 + 1);
        if (!numbers.includes(r)) numbers.push(r);
    }

}
generateNumbers();

function checkGuess() {
    const guessInputs = document.querySelectorAll("input[type='text']");
    const guessValue = Array.from(guessInputs).map(input => parseInt(input.value)).join('');

    if (guessValue.length !== 4 || isNaN(guessValue)) {
        alert("Please enter a 4-digit number.");
        return;
    }

    for (let i = 0; i < 4; i++) {
        x = parseInt(guessValue[i]);
        userNumbers[i] = x;
    }

    let message = "";
    let counter = 0;

    guessInputs.forEach(input => input.style.border = '1px solid black');

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === userNumbers[i]) {
            guessInputs[i].style.border = '4px solid green';
            // message += " green | ";
            counter++;
        } else if (numbers.includes(userNumbers[i])) {
            // message += " yellow |   ";
            guessInputs[i].style.border = '4px solid yellow';
        } else {
            // message += " red  | ";
            guessInputs[i].style.border = '4px solid red';
        }
    }

    const resultDiv = document.getElementById("result");
    if (counter === 4) {
        attempts++; // افزایش تعداد تست‌ها
        resultDiv.textContent = `Congratulations, you have successfully decoded. Number of tests: ${attempts}`;
    } else {
        attempts++; // افزایش تعداد تست‌ها
        resultDiv.textContent = message;
    }
}

