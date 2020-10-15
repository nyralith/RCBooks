function redirect() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (user == "admin" && password == "admin1") { window.location.replace("adminPage.html") } else { validationUser() }
}
function validationUser() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let userSignUp = JSON.parse(localStorage.getItem('userSignUp')) || [];
    validation = false
    userSignUp.map((userValidation) => {
        if (userValidation.newuser == user && userValidation.newpassword == password)
            validation = true
    })
    if (validation) {
        alert(`Bienvenido ${user} - Ir al Home`)
        window.location.replace("Index.html");
    } else {
        alert("Usuario o contraseña no válido")
    }
}