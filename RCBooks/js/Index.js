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
        return codigoexist
    }
    return !codigoexist
}
function isValid() {
    return (fullFilledForm() && uniquecodigo())
}
function appendIndex() {
    let cardsNews = document.getElementById('cardsNews')
    cardsNews.innerHTML = " "
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.map(function (book) {
        cardsNews.innerHTML += `
        <div class="col mb-4">
           <div class="cardCollection">
            <img src="https://i.ibb.co/S3JJBTX/LOGO-NUEVO.png" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${book.titulo}</h5>
              <p class="card-text">${book.descBook}</p>
            </div>
           </div>
        </div>`
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
            formulario.editorial.value)
        books.push(book)
        localStorage.setItem("books", JSON.stringify(books))
        appendIndex()
    }
}
appendIndex()
//For Our Colection Cards
let arrayColectionIndex = [
    {
        title: 'Código Limpio',
        cover: 'https://imagessl6.casadellibro.com/a/l/t7/06/9788441532106.jpg',
        author: 'Robert C. Martin',
        gener: '3.500',
        summary: 'Cada año, se invierten innumerables horas y se pierden numerosos recursos debido a código mal escrito, ralentizando el desarrollo, disminuyendo la productividad, generando graves fallos e incluso pudiendo acabar con la organización o empresa. El reconocido experto de software Robert C. Martin, junto con sus colegas de Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para limpiar el código sobre la marcha y crearlo de forma correcta, de este modo mejorará como programador.'
    },
    {
        title: 'Writing code that nobody else can read',
        cover: 'https://external-preview.redd.it/1RhyWqFAkwPTydHOM05SyXgtf4NNJCBIvy4quaC2XTk.jpg?auto=webp&s=e094b9791d52cff1c537ad20df31b7e22d0aec29',
        author: '',
        gener: 'Informática',
        price:'$1.535',
        summary: 'No matter how much experience you have with JavaScript, odds are you dont fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. Youll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.Like other books in the "You Dont Know JS" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery.Learn about scope, a set of rules to help JavaScript engines locate variables in your codeGo deeper into nested scope, a series of containers for variables and functionsExplore function- and block-based scope, "hoisting", and the patterns and benefits of scope-based hidingDiscover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries'
    },
    {
        title: 'El duelo',
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/318/original/portada_el-duelo_gabriel-rolon_202009172233.jpg',
        author: 'Gabriel Rolon',
        gener: 'psicologia',
        price:'$1.390',
        summary: '"El Duelo es un territorio oscuro, misterioso, casi inaccesible. Una conmoción que nos sorprende, nos toma desprevenidos y cambia nuestro entorno en un instante. No importa lo preparados que creamos estar para enfrentar una pérdida, esa preparación jamás será suficiente. Cuando ocurre, todo se desmorona y por un tiempo nada tiene sentido. Algo se quiebra en nosotros, el mundo se derrumba y nos muestra su aspecto más cruel."'
    },
    {
        title: 'La hora de los hipócritas',
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/313/original/312995_portada_la-hora-de-los-hipocritas_petros-markaris_202002061519.jpg',
        author: 'Petros Markais',
        gener: 'Novela Policial',
        price:'1.030',
        summary: 'Para Jaritos, el esperadísimo nacimiento de su nieto conlleva un significativo cambio en su vida privada. Sin embargo, la alegría por ese emotivo acontecimiento se ve eclipsada por la llamada que le anuncia el asesinato de un famoso empresario, un poderoso hotelero, muy conocido por sus contribuciones benéficas. ¿Un nuevo grupo terrorista? ¿Una venganza personal?'
    },
]
let cardsColectionIndex = document.getElementById('cardsColectionIndex');
arrayColectionIndex.map((cardColection) => {
    cardsColectionIndex.innerHTML += `
    <div class="col mb-4">
    <div class="cardCollection">
      <img src="${cardColection.cover}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${cardColection.title}</h5>
        <p class="card-text">${cardColection.summary}</p>
      </div>
    </div>
  </div>
    `
})