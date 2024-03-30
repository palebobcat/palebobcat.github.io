function checkPassword() {
    var input = document.getElementById('password').value;
    var x = document.getElementById("incorrect");
    var y = document.getElementById("correct");

    if (input !== "Snoetje#Nexit1940") {
        x.style.display = "inline-block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "inline-block";
    }
}