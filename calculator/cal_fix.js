// 디스플레이에 값을 추가하는 함수
function appendToDisplay(value) {
    display.style.fontSize = '24px';
    document.getElementById('display').value += value;
}

// 디스플레이를 초기화하는 함수
function clearDisplay() {
    document.getElementById('display').value = '';
}

// 마지막 문자를 삭제하는 함수
function deleteLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// 계산을 수행하는 함수
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function sin() {
    let display = document.getElementById('display');
    display.value += "Math.sin(" + display.value + ")";
}

function cos() {
    let display = document.getElementById('display');
    display.value += "Math.cos(" + display.value + ")";
}

function tan() {
    let display = document.getElementById('display');
    display.value += "Math.tan(" + display.value + ")";
}

function sqrt() {
    let display = document.getElementById('display');
    display = Math.sqrt(display.value);
}



// 팩토리얼을 계산하는 함수
function factorial() {
    let display = document.getElementById('display');
    let n = parseInt(display.value);
    if (n >= 0 && Number.isInteger(n)) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        display.value = result;
    } else {
        display.value = 'Error';
    }
}

// 진법 변환을 수행하는 함수
// 주어진 숫자와 진법을 10진법으로 변환하는 함수
function convertBase() {
    let display = document.getElementById('display');
    let input = display.value.split(',');
    display.style.fontSize = '14px';
    if (input.length !== 2) {
        display.value = 'Error:"숫자,진법" 형식으로 입력해주세요.';
        return;
    }

    let number = input[0].trim();
    let base = parseInt(input[1].trim());

    if (isNaN(base) || base < 2 || base > 36) {
        display.value = 'Error: 2~36진법을 입력해주세요.';
        return;
    }

    try {
        // parseInt를 사용하여 주어진 진법의 숫자를 10진수로 변환
        let decimalNumber = parseInt(number, base);
        
        if (isNaN(decimalNumber)) {
            display.value = 'Error: 주어진 진법에 맞지 않는 숫자입니다.';
        } else {
            display.value = `${number}(${base}) = ${decimalNumber}(10)`;
        }
    } catch (error) {
        display.value = 'Error: 변환 중 오류가 발생했습니다.';
    }
}