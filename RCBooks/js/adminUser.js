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
function appendNewUser() {
    let tableNewUser = document.getElementById('tableNewUser')
    tableNewUser.innerHTML = " "
    let userSignUp = JSON.parse(localStorage.getItem('userSignUp')) || [];
    userSignUp.map(function (item, i) {
        tableNewUser.innerHTML += `
        <tr>
          <th scope="row">${item.newuser}</th>
          <td>${item.newname}</td>
          <td>${item.newpassword}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
          <div class='acctionNewUser'>
            <td onclick = "removeUser(${i})"><span class="material-icons btndelete">delete_sweep</span></td>
          </div>
        </tr>`
    }
    )
}
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
        appendNewUser()
    }
}
function removeUser(i) {
    let confirmDeleteUser = confirm("¿Desea eliminar el usuario?");
    if (confirmDeleteUser) {
        let userSignUp = JSON.parse(localStorage.getItem('userSignUp')) || [];
        let newUserSignUp = userSignUp.filter((signUpUser) => {
            return userSignUp[i] != signUpUser
        })
        localStorage.setItem('userSignUp', JSON.stringify(newUserSignUp))
        appendNewUser()
    } else
        alert("No se ha podido eliminar el Usuario");
}

function validateNewUser() {
    if (fields.newuser && fields.newname && fields.newpassword && fields.email && fields.phone && terms.checked) {
        return true;
    } else {
        return false;
    }
}
appendNewUser()