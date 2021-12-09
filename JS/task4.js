function change() {
    let str = document.getElementById('text').value.toLowerCase();
    let cString = str.replace(/_([a-z])/g, up);
    function up(str) {
        return str[1].toUpperCase();
    }
    let res = document.getElementById('res');
    res.innerHTML = cString;
}
