function countUp() {
    var number = document.getElementById("textarea").value.length;
    document.getElementById("countRealTime").innerText = number;
}

function deleteChar() {
    document.getElementById("textarea").value = "";
    document.getElementById("countRealTime").innerText = 0;
}