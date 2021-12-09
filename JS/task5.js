let btn = document.getElementById("ExecuteSnake");
btn.addEventListener("click", toCamelCase)
function toCamelCase(){
    let str = document.getElementById("camelCaseInput").value;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toUpperCase()) {
            str = str.slice(0, i) + "_" + str[i].toLowerCase() + str.slice(i+1);
        }
    }
    let answer = document.getElementById("snakeCaseOutput");
    answer.innerText = str;
}