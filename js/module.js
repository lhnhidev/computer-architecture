export {checkInput, contentAnswer};

function checkInput(myString) {
    if (myString.length == '0') return false;
    if (isNaN(myString)) return false;
    return true;
}

var contentAnswer = `<p class="wrapper__text">Answer: </p>
                <span class="wrapper__sign"></span>
                <span class="wrapper__exponent"></span>
                <span class="wrapper__fraction"></span>

                <hr>

                <p class="wrapper__text">Answer formated: </p>
                <span class="wrapper__format"></span>

                <hr>

                <p class="wrapper__text">Hexa: </p>
                <span class="wrapper__hexa"></span>`;

