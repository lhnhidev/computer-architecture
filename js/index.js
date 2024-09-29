import { contentAnswer } from "./module.js";

const inputNumber = document.querySelector('#input');
const answerBox = document.querySelector('#answer');

inputNumber.addEventListener('click', () => {
    document.addEventListener('keyup', handleKeyUp);
});

function handleKeyUp(event) {
    if (event.key == 'Enter') {
        inputNumber.textContent = '';
        if (!isNaN(inputNumber.value)) {
            let answerText = parseFloat(inputNumber.value).toString(2);
            
            let sign = '0';
            if (answerText < 0) {
                sign = '1';
                answerText = answerText.replace('-', '');
            }
            
            let exponent = answerText.indexOf('.') - 1 + 127;
            if (answerText.indexOf('.') == -1) {
                exponent = '0' + (127).toString(2);
            }
            else {
                exponent = parseFloat(exponent).toString(2);
            }

            let fraction = answerText.replace('.', '').slice(1);
            while (fraction.length < 23) fraction += '0';
            
            document.querySelector('.wrapper__answer').innerHTML = contentAnswer;
            document.querySelector('.wrapper__sign').textContent = sign;
            document.querySelector('.wrapper__exponent').textContent = exponent;
            document.querySelector('.wrapper__fraction').textContent = fraction;
            
            let resultString = sign + exponent + fraction;
            let hexaAnswer = '0x';
            let formatAnswer = '';

            let j = 1;
            for (let i = 4; i <= resultString.length; i +=4) {
                hexaAnswer += parseInt(resultString.slice(i - 4, i), 2).toString(16).toUpperCase();
                if (i == resultString.length) formatAnswer += resultString.slice(i - 4, i);
                else formatAnswer += resultString.slice(i - 4, i) + '_';
            }

            document.querySelector('.wrapper__format').textContent = formatAnswer;
            document.querySelector('.wrapper__hexa').textContent = hexaAnswer;
        } else {
            console.log(-1);
        }
    }
}