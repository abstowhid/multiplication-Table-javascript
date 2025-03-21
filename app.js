let btn = document.getElementById('btn');
let err = document.getElementById('err');
let result = 0;
function generateMulti() {
    document.getElementById('p').innerHTML = ``;
    document.getElementById('h').style.display = 'none';
    document.getElementById('result').style.display = 'none';

    let inputNum = document.getElementById('num').value;
    let finalInput = Number(inputNum);
    if (inputNum === '' || isNaN(finalInput)) {
        err.style.display = 'block';
        err.textContent = 'sorry,not a Number';

        return;
    }
    if (finalInput < 1) {
        err.style.display = 'block';
        err.textContent = 'Please input a valid number';

        return;
    }

    err.style.display = 'none';
    document.getElementById(
        'h'
    ).textContent = `Showing Multiplication Table for ${finalInput}`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('h').style.display = 'block';
    for (let i = 1; i <= 10; i++) {
        result = i * finalInput;
        document.getElementById(
            'p'
        ).innerHTML += `${finalInput} x ${i} = ${result}<br>`;
    }
}
