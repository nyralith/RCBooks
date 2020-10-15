// Validation in completing the new user form
const form = document.getElementById('newUserform');
const inputs = document.querySelectorAll('#newUserform input');
const expressions = {
    newuser: /^[a-zA-Z0-9\_\-]{4,16}$/, // letters numbers hyphens underscores 
    newname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Only letters and spaces can have an accent.
    newpassword: /^.{4,12}$/, // 4 to 12 digits.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 to 14 numbers.
}
const fields = {
    newuser: false,
    newname: false,
    newpassword: false,
    email: false,
    phone: false
}
const validateForm = (e) => {
    switch (e.target.name) {
        case "newuser":
            validateField(expressions.newuser, e.target, 'newuser');
            uniqueUser();
            break;
        case "newname":
            validateField(expressions.newname, e.target, 'newname');
            break;
        case "newpassword":
            validateField(expressions.newpassword, e.target, 'newpassword');
            break;
        case "password2":
            validatePassword2();
            break;
        case "email":
            validateField(expressions.email, e.target, 'email');
            break;
        case "phone":
            validateField(expressions.phone, e.target, 'phone');
            break;
    }
}
const validateField = (expresion, input, field) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error-active');
        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error-active');
        fields[field] = false;
    }
}
//validate User
function uniqueUser() {
    let userSignUp = JSON.parse(localStorage.getItem('userSignUp')) || [];
    userExist = false
    userSignUp.map((userValidation) => {
        if (userValidation.newuser == newUserform.newuser.value)
            userExist = true
    })
    if (userExist) {
        alert("El usuario ya exite por favor elija otro")
    }
    return !userExist
}
// validate password 2
const validatePassword2 = () => {
    const inputPassword1 = document.getElementById('newpassword');
    const inputPassword2 = document.getElementById('password2');
    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`group__password2`).classList.add('form__group-incorrect');
        document.getElementById(`group__password2`).classList.remove('form__group-correct');
        document.querySelector(`#group__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#group__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__password2 .form__input-error`).classList.add('form__input-error-active');
        fields['newpassword'] = false;
    } else {
        document.getElementById(`group__password2`).classList.remove('form__group-incorrect');
        document.getElementById(`group__password2`).classList.add('form__group-correct');
        document.querySelector(`#group__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#group__password2 .form__input-error`).classList.remove('form__input-error-active');
        fields['newpassword'] = true;
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
    uniqueUser();
});
form.addEventListener('submit', (e) => {
    e.preventDefault(); // remove if data is sent
    const terms = document.getElementById('terms');
    if (fields.newuser && fields.newname && fields.newpassword && fields.email && fields.phone && terms.checked) {
        form.reset();
        document.getElementById('form__newmessage-successful').classList.add('form__message-successful-active');
        setTimeout(() => {
            document.getElementById('form__newmessage-successful').classList.remove('form__message-successful-active');
        }, 4000);
        document.querySelectorAll('.form__group-correct').forEach((icon) => {
            icon.classList.remove('form__group-correct');
        });
    } else {
        document.getElementById('form__newmessage').classList.add('form__message-active');
        setTimeout(() => {
            document.getElementById('form__newmessage').classList.remove('form__message-active');
        }, 4000);
    }
});
//register in the Local Storage
class NewUser {
    constructor(newuser, newname, newpassword, email, phone) {
        this.newuser = newuser;
        this.newname = newname;
        this.newpassword = newpassword;
        this.email = email;
        this.phone = phone;
    }
}

const newUserForm = document.newUserform
function addUser(event) {
    event.preventDefault()
    if (validateNewUser()) {
        let userSignUp = JSON.parse(localStorage.getItem('userSignUp')) || [];
        let signUpUser = new NewUser(newUserform.newuser.value,
            newUserform.newname.value,
            newUserform.newpassword.value,
            newUserform.email.value,
            newUserform.phone.value)
        userSignUp.push(signUpUser)
        localStorage.setItem("userSignUp", JSON.stringify(userSignUp))
    }
}

function validateNewUser() {
    if (fields.newuser && fields.newname && fields.newpassword && fields.email && fields.phone && terms.checked) {
        return true;
    } else {
        return false;
    }
}
