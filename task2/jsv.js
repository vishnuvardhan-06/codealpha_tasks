let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons')[0].children);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === 'C') {
            display.value = '';
        } else if (value === '←') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});