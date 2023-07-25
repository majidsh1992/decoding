// // آرایه برای ذخیره کردن رزمی که کامپیوتر میدهد
// const numbers = []
// // آرایه برای ذخیره کردن رمزی که کاربر میدهد
// const userNumbers = [];

// let x;

// // تابع برای ساختن رمز ها به صورت رندم
// function generateNumbers() {
//   numbers[0] = Math.floor(Math.random() * 9 + 1);

//   let r;

//   while (numbers.length != 4) {
//     r = Math.floor(Math.random() * 9 + 1);
//     if (!numbers.includes(r)) numbers.push(r);
//   }

// }
// generateNumbers();

// // گرفتن اعداد از کاربر با حلقه for
// while (true) {
//     for (let i = 0; i < 4; i++) {
//         x = prompt(`Enter ${i}th number:`)

//         x = parseInt(x);


//         userNumbers[i] = x;
//     }
//     let message = "";
//     let counter = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === userNumbers[i]) {
//             message += "_green_ "
//             counter++;
//         }


//         else if (numbers.includes(userNumbers[i]))
//             message += "_yellow_ "
//         else
//             message += "_red_ "

//     }
//     if (counter == 4) {
//         console.log('tabrik. shoma barande shodid');
//         break;
//     }
//     console.log(message);
// }

// const numbers = [];
// const userNumbers = [];

// let x;

// function generateNumbers() {
//     numbers[0] = Math.floor(Math.random() * 9 + 1);

//     let r;

//     while (numbers.length != 4) {
//         r = Math.floor(Math.random() * 9 + 1);
//         if (!numbers.includes(r)) numbers.push(r);
//     }

// }
// generateNumbers();

// function checkGuess() {
//     const guessInput = document.getElementById("guess");
//     const guessValue = guessInput.value;

//     if (guessValue.length !== 4 || isNaN(guessValue)) {
//         alert("Please enter a 4-digit number.");
//         return;
//     }

//     for (let i = 0; i < 4; i++) {
//         x = parseInt(guessValue[i]);

//         userNumbers[i] = x;
//     }

//     let message = "";
//     let counter = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === userNumbers[i]) {
//             message += "_green_ ";
//             counter++;
//         } else if (numbers.includes(userNumbers[i]))
//             message += "_yellow_ ";
//         else
//             message += "_red_ ";
//     }

//     const resultDiv = document.getElementById("result");
//     if (counter === 4) {
//         resultDiv.textContent = 'تبریک! شما برنده شدید.';
//     } else {
//         resultDiv.textContent = message;
//     }
// }




// const numbers = [];
// const userNumbers = [];

// let x;

// let attempts = 0; // اضافه کردن متغیر attempts

// function generateNumbers() {
//     numbers[0] = Math.floor(Math.random() * 9 + 1);

//     let r;

//     while (numbers.length != 4) {
//         r = Math.floor(Math.random() * 9 + 1);
//         if (!numbers.includes(r)) numbers.push(r);
//     }

// }
// generateNumbers();

// function checkGuess() {
//     const guessInputs = document.querySelectorAll("input[type='text']");
//     const guessValue = Array.from(guessInputs).map(input => parseInt(input.value)).join('');

//     if (guessValue.length !== 4 || isNaN(guessValue)) {
//         alert("Please enter a 4-digit number.");
//         return;
//     }

//     for (let i = 0; i < 4; i++) {
//         x = parseInt(guessValue[i]);
//         userNumbers[i] = x;
//     }

//     let message = "";
//     let counter = 0;

//     // Reset border colors for all input elements
//     guessInputs.forEach(input => input.style.border = '1px solid black');

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === userNumbers[i]) {
//             message += "_green_ ";
//             counter++;
//         } else if (numbers.includes(userNumbers[i])) {
//             message += "_yellow_ ";
//             // Set border color to yellow for the input that exists in the numbers array but in the wrong position
//             guessInputs[i].style.border = '1px solid yellow';
//         } else {
//             message += "_red_ ";
//             // Set border color to red for the input that does not exist in the numbers array
//             guessInputs[i].style.border = '1px solid red';
//         }
//     }

//     const resultDiv = document.getElementById("result");
//     if (counter === 4) {
//         attempts++; // افزایش تعداد تست‌ها
//         resultDiv.textContent = 'تبریک! شما برنده شدید.';
//     } else {
//         attempts++; // افزایش تعداد تست‌ها
//         resultDiv.textContent = message;
//     }
// }



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
            guessInputs[i].style.border = '5px solid green';
            // message += " green | ";
            counter++;
        } else if (numbers.includes(userNumbers[i])) {
            // message += " yellow |   ";
            guessInputs[i].style.border = '5px solid yellow';
        } else {
            // message += " red  | ";
            guessInputs[i].style.border = '5px solid red';
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

