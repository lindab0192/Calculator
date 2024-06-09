let display = document.querySelector('.display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');
        switch(value){
            case 'AC':
                display.innerText = " ";
                break;
            case 'C':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    console.log('Evaluating:', display.innerText); // Lägg till loggning här
                    display.innerText = evaluateExpression(display.innerText);
                } catch (err) {
                    console.error('Error:', err); // Lägg till loggning för fel
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += value;
        }
    });
});

function evaluateExpression(expr) {
    // Använd Function-konstruktorn för att utvärdera uttrycket
    console.log('Expression to evaluate:', expr); // Lägg till loggning här också
    return new Function('return ' + expr)();
}