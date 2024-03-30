function checkPassword() {
    var input = document.getElementById('password').value;
    if (input !== "password123") {
        alert("WRONG PASSWORD DUMBASS!!!!");
    } else {
        alert(input);
    }
}