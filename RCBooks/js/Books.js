class Book {
    constructor(codigo, titulo, autor, lenguaje, genero, anio, editorial, imgBook, descBook) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.lenguaje = lenguaje;
        this.genero = genero;
        this.anio = anio;
        this.editorial = editorial;
        this.imgBook = imgBook;
        this.descBook = descBook;

    }
}

const formulario = document.form
function fullFilledForm() {
    if (!!formulario.codigo.value && !!formulario.titulo.value && !!formulario.autor.value && !!formulario.lenguaje.value && !!formulario.genero.value && !!formulario.anio.value && !!formulario.editorial.value) {
        return true
    } else {
        alert("Debe completar el formulario")
        return false
    }
}

function uniquecodigo() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    codigoexist = false
    books.map((book) => {
        if (book.codigo == formulario.codigo.value)
            codigoexist = true
    })
    if (codigoexist) {
        alert("ya existe un book cargado con ese codigo")

    }
    return !codigoexist
}

function formReset() {
    formulario.codigo.value = ""
    formulario.titulo.value = ""
    formulario.autor.value = ""
    formulario.lenguaje.value = ""
    formulario.genero.value = ""
    formulario.anio.value = ""
    formulario.editorial.value = ""
    formulario.imgBook.value = ""
    formulario.descBook.value = ""
}

function isValid() {
    return (fullFilledForm() && uniquecodigo())
}

function appendTable() {
    let tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = " "
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.map(function (book, i) {
        tableBody.innerHTML += `
        <tr>
          <th scope="row">${book.codigo}</th>
          <td>${book.titulo}</td>
          <td>${book.autor}</td>
          <td>${book.lenguaje}</td>
          <td>${book.genero}</td>
          <td>${book.anio}</td>
          <td>${book.editorial}</td>
         <div class='acctionNewBook'>
          <td onclick = "removeBook(${i})"><span class="material-icons btndelete">delete_sweep</span></td>
          <td onclick = "editBook(${i})"><span class="material-icons btnedit">edit</span></td>  
         </div>
        </tr>
       `
    }
    )
}

function addBook(event) {
    event.preventDefault()
    if (isValid()) {
        let books = JSON.parse(localStorage.getItem("books")) || [];
        let book = new Book(formulario.codigo.value,
            formulario.titulo.value,
            formulario.autor.value,
            formulario.lenguaje.value,
            formulario.genero.value,
            formulario.anio.value,
            formulario.editorial.value,
            formulario.imgBook.value,
            formulario.descBook.value,
        )
        books.push(book)
        localStorage.setItem("books", JSON.stringify(books))
        appendTable()
        formReset()
    }
}

function removeBook(i) {
    let confirmDeleteBook = confirm("¿Confirmar cambios?")
    if (confirmDeleteBook) {
        let books = JSON.parse(localStorage.getItem("books")) || [];
        let newbooks = books.filter((book) => {
            return books[i] != book
        })
        localStorage.setItem('books', JSON.stringify(newbooks))
        appendTable()
    } else
        alert("No se ha podido eliminar el libro");
}
appendTable()

function editBook(i) {
    var elements = JSON.parse(localStorage.getItem("books"))
    var codigo = document.getElementById('codigo')
    var titulo = document.getElementById('titulo')
    var autor = document.getElementById('autor')
    var lenguaje = document.getElementById('lenguaje')
    var genero = document.getElementById('genero')
    var anio = document.getElementById('anio')
    var editorial = document.getElementById('editorial')
    var imagen = document.getElementById('imgBook');
    var description = document.getElementById('descBook');
    codigo.setAttribute('value', elements[i].codigo);
    titulo.setAttribute('value', elements[i].titulo);
    autor.setAttribute('value', elements[i].autor);
    lenguaje.setAttribute('value', elements[i].lenguaje);
    genero.setAttribute('value', elements[i].genero);
    anio.setAttribute('value', elements[i].anio);
    editorial.setAttribute('value', elements[i].editorial);
    imagen.setAttribute('value', elements[i].imagen);
    description.setAttribute('value', elements[i].description);
    // change codigo to disabled
    codigo.disabled = true
    // disable the button Agregar
    document.getElementById('button').disabled = true
    //if the button is already added then remove the existing one and add another with its id
    if (!document.getElementById('guardar')) {
        formulario.innerHTML += `<button id='guardar'onclick="save(${i})">Guardar cambios</button>`
    } else {
        element = document.getElementById('guardar')
        element.parentNode.removeChild(element)
        formulario.innerHTML += `<button id='guardar' onclick="save(${i})">Guardar cambios</button>`
    }
}
function save(i) {
    removeBook(i)
    addBook(event)
    appendTable()
    location.reload();
}