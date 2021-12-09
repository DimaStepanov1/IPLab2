function solve() {
    let number1 = document.getElementById('n1').value;
    let number2 = document.getElementById('n2').value;
    let length1 = number1.length;
    let length2 = number2.length;
    let maxLength = Math.max(length1, length2);
    number1 = number1.padStart(maxLength, "0");
    number2 = number2.padStart(maxLength, "0");
    document.getElementById('n1').value = number1;
    document.getElementById('n2').value = number2;
    let result = "";
    let temp = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        let a = Number(number1[i]) + Number(number2[i]) + temp;
        result = String(a % 10) + result;
        temp = parseInt(a / 10);
    }
    if (temp > 0) {
        result = String(temp) + result;
    }
    document.getElementById('res').innerHTML = result;
}