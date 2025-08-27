let state = {
    input: "",
    operator: null,
    lhs: "",
};

let elements = {
    text: document.querySelector('#displaytext'),
    buttons: document.querySelector('#buttons'),
};

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b == 0 ? NaN : a/b,
}

function operate() {
    if (state.input == "") {
        alert("No number entered");
        return;
    }
    if (!state.operator) {
        alert("No operator selected");
        return;
    }
    const fn = ops[state.operator];
    showAnswer(fn(Number(state.lhs), Number(state.input)));
}

function selectOperation(op) {
    if (state.input == "") {
        alert("No number entered");
        return;
    }
    if (state.operator) {
        operate();
        state.operator = op;
        return;
    }
    state.operator = op;
    [state.lhs, state.input] = [state.input, ""];
    elements.text.textContent = "";
}

function updateDisplay(char) {
    state.input += char;
    elements.text.textContent = `${state.input}`;
}

function showAnswer(str) {
    state.lhs = Number(str);
    state.input = "";
    state.operator = null;
    elements.text.textContent = `${str}`;
}

function clear() {
    state.input = state.lhs = "";
    state.operator = null;
    elements.text.textContent = "";
}

const actions = {
    digit: ({value}) => updateDisplay(value),
    op: ({op}) => selectOperation(op),
    equals: () => operate(),
    clear: () => clear(),
};

elements.buttons.addEventListener('click', (e) => {
    let target = e.target.closest('button');
    if (!target) return;

    const {action, value, op} = target.dataset;
    const handler = actions[action];
    if (handler) handler({value, op});
});