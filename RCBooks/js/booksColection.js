let arrayColection = [
    {
        title: 'Birra',
        isbn: 1,
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/282/original/portada_birra_nicolas-salvarrey_201810091522.jpg',
        author: 'Nicolas Harry Salvarrey',
        gener: 'Cocina',
        price:'$1.410',
        summary: 'Hubo un tiempo en que la cerveza artesanal no era ni una moda, ni una tendencia, ni una costumbre, ni un negocio. Apenas el delirio de unos pocos productores y el hobby de unos cuantos locos, aburridos de tomar siempre lo mismo. Los años hicieron que el delirio creciera y se fuera multiplicando. Sin embargo, una cosa sigue igual. La cerveza artesanal no es ni una moda, ni una tendencia, ni una costumbre, ni un negocio: es cultura y llegó para quedarse.'
    },
    {
        title: 'eloquent javascript',
        isbn: 2,
        cover: 'https://kbimages1-a.akamaihd.net/2434786f-8e20-46c2-a6ec-7f1fd3197dcb/1200/1200/False/eloquent-javascript-3rd-edition.jpg',
        author: 'Marijin Haverbeke',
        gener: 'Informática',
        price:'free - https://eloquentjavascript.net/',
        summary: 'Este libro trata de como hacer que las computadoras hagan lo que tú quieres que hagan. Las computadoras son tan comunes como los destornilladores hoy en día, pero tienen mucha más complejidad oculta y, por lo tanto, son más difíciles de operar y entender. Para muchos siguen siendo cosas extrañas, un poco amenazadoras.'
    },
    {
        title: 'Writing code that nobody else can read',
        isbn: 3,
        cover: 'https://external-preview.redd.it/1RhyWqFAkwPTydHOM05SyXgtf4NNJCBIvy4quaC2XTk.jpg?auto=webp&s=e094b9791d52cff1c537ad20df31b7e22d0aec29',
        author: '',
        gener: 'Informática',
        price:'$1.535',
        summary: 'No matter how much experience you have with JavaScript, odds are you dont fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. Youll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.Like other books in the "You Dont Know JS" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery.Learn about scope, a set of rules to help JavaScript engines locate variables in your codeGo deeper into nested scope, a series of containers for variables and functionsExplore function- and block-based scope, "hoisting", and the patterns and benefits of scope-based hidingDiscover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries'
    },
    {
        title: 'Como catar Cerveza',
        isbn: 4,
        cover: 'https://imagessl5.casadellibro.com/a/l/t7/45/9788428216845.jpg',
        author: 'Randy Mosher',
        gener: 'Cocina',
        price:'$2.535',
        summary: 'Puede diferenciar una Weissbier de una Witbier belga? Mejore su aprecio por sus cervezas favoritas aprendiendo a identificar los aromas, colores y sabores de los principales tipos de cerveza.'
    },
    {
        title: 'Horoscopo Chino 2021',
        isbn: 5,
        cover: 'https://kbimages1-a.akamaihd.net/0bc4ed69-105a-4ce7-beff-7aac330d91b4/1200/1200/False/horoscopo-chino-2021.jpg',
        author: 'Ludovica Squirru Dari',
        gener: 'Espiritualidad y Esoterismo',
        price:'$799',
        summary: 'En el Horóscopo chino 2020 Ludovica Squirru anticipó que la rata de metal "cobrará intereses kármicos inolvidables y los pagarán los ciudadanos de cada país con la salud" y una vez más sus predicciones fueron acertadas. En este Horóscopo chino 2021, la astróloga más leída y best seller internacional, abre una esperanza: el Búfalo de Metal, venerado en China por ser el "símbolo de la integración familiar, la conservación de recursos, el trabajo arduo, el orden y la disciplina, nos enseñará a practicar la paciencia, el esfuerzo para lograr los objetivos, la rutina como ley para no perderse en el camino, los principios cósmicos, terrenales, y el retorno a la naturaleza". Este libro, un verdadero oráculo que permite conocernos íntimamente y tomar mejores decisiones en cada aspecto de la vida, incluye las predicciones mundiales y para todos los países del continente americano y España.'
    },
    {
        title: 'Secrets of the JavaScript Ninja',
        isbn: 6,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51u9Pg4riRL._SX397_BO1,204,203,200_.jpg',
        author: 'john Resig',
        gener: 'Informática',
        price:'$2.170',
        summary: 'More than ever, the web is a universal platform for all types of applications, and JavaScript is the language of the web. If you´re serious about web development, it´s not enough to be a decent JavaScript coder. You need to be ninja-stealthy, efficient, and ready for anything. This book shows you how.'
    },
    {
        title: 'Dime que comes y te dire que bacterias tienes',
        isbn: 7,
        cover: 'https://kbimages1-a.akamaihd.net/46381421-1f83-4eae-a021-9699a7d75c2c/1200/1200/False/dime-que-comes-y-te-dire-que-bacterias-tienes.jpg',
        author: 'Blanca Garcia-Orea',
        gener: 'Medicina y Salud',
        price:'$1.393',
        summary: 'La nutricionista Blanca García-Orea nos descubre una forma revolucionaria de alcanzar el bienestar emocional y físico: cuidar la microbiota intestinal. Muchas veces sufrimos cansancio, mal humor, ansiedad, estrés e incluso molestias digestivas que tratamos solo con medicamentos. Blanca García-Orea, una de las nutricionistas más influyentes en nuestro país, comparte las claves para entender cómo influyen las bacterias intestinales'
    },
    {
        title: 'El duelo',
        isbn: 8,
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/318/original/portada_el-duelo_gabriel-rolon_202009172233.jpg',
        author: 'Gabriel Rolon',
        gener: 'psicologia',
        price:'$1.390',
        summary: '"El Duelo es un territorio oscuro, misterioso, casi inaccesible. Una conmoción que nos sorprende, nos toma desprevenidos y cambia nuestro entorno en un instante. No importa lo preparados que creamos estar para enfrentar una pérdida, esa preparación jamás será suficiente. Cuando ocurre, todo se desmorona y por un tiempo nada tiene sentido. Algo se quiebra en nosotros, el mundo se derrumba y nos muestra su aspecto más cruel."'
    },
    {
        title: '201 Tips para no comer como el OR**!!',
        isbn: 9,
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/298/original/portada_201-tips-para-no-comer-como-el-or_narda-lepes-miranda_202009090101.jpg',
        author: 'Narda Lepes',
        gener: 'Cocina',
        price:'$1.200',
        summary: 'Todo empezó casi como un chiste. Una tarde, medio aburrida en casa, disparé un par de tuits y la cosa pegó bien. Rebotó por todos lados. A partir de ese momento se transformó en algo que creció tanto de un lado como del otro de la red. Y es que, a veces, los que estamos todo el día en la cocina damos por hecho o por sabidos muchos temas básicos o de sentido común. Por eso, me pareció una buena idea bajar y juntar estos tips, tuits, consejos, ideas y comentarios –o como quieran llamarlos– en un libro. Porque comer bien es mucho más que preparar grandes recetas o saber un montón de técnicas.'
    },
    {
        title: 'La hora de los hipócritas',
        isbn: 10,
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/313/original/312995_portada_la-hora-de-los-hipocritas_petros-markaris_202002061519.jpg',
        author: 'Petros Markais',
        gener: 'Novela Policial',
        price:'$1.030',
        summary: 'Para Jaritos, el esperadísimo nacimiento de su nieto conlleva un significativo cambio en su vida privada. Sin embargo, la alegría por ese emotivo acontecimiento se ve eclipsada por la llamada que le anuncia el asesinato de un famoso empresario, un poderoso hotelero, muy conocido por sus contribuciones benéficas. ¿Un nuevo grupo terrorista? ¿Una venganza personal?'
    },
    {
        title: 'Código Limpio',
        isbn: 11,
        cover: 'https://imagessl6.casadellibro.com/a/l/t7/06/9788441532106.jpg',
        author: 'Robert C. Martin',
        gener: '$3.500',
        summary: 'Cada año, se invierten innumerables horas y se pierden numerosos recursos debido a código mal escrito, ralentizando el desarrollo, disminuyendo la productividad, generando graves fallos e incluso pudiendo acabar con la organización o empresa. El reconocido experto de software Robert C. Martin, junto con sus colegas de Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para limpiar el código sobre la marcha y crearlo de forma correcta, de este modo mejorará como programador.'
    },
    {
        title: 'Lo Bueno de tener un mal día',
        isbn: 12,
        cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/324/original/323546_portada_lo-bueno-de-tener-un-mal-dia_anabel-gonzalez_201911280911.jpg',
        author: 'Anabel Gonzalez',
        gener: 'Autoayuda y Superacion',
        price:'$679',
        summary: 'Pocos refranes han sido más perjudiciales que ese que dice que al mal tiempo hay que ponerle buena cara. Al mal tiempo hay que ponerle lágrimas o tristeza. Al bueno, sonrisas y alegría. Saber gestionar nuestras emociones no es esconderlas ni suprimirlas, es reconocerlas y manejarlas del modo más adecuado.'
    },
    {
        title: 'PROXIMAMENTE MAS TÍTULOS',
        isbn: 13,
        cover: 'https://i.ibb.co/S3JJBTX/LOGO-NUEVO.png',
        author: 'RCBooks',
        gener: 'Todos los que ustedes quieran',
        price:'',
        summary: 'Somos una empresa nueva, trabajamos en forma de cooperativa y en proceso continuo, creemos fielmente en el poder de la lectura y el aprendizaje, estamos construyendo esto para ustedes queridos usuarios, les pedimos paciencia mientras sumamos más títulos y poder tener la libreria que usted se merece'
    },
]
let searchBook = document.querySelector('#searchBook');
let searchBotton = document.querySelector('#searchBotton');
let resultSearch = document.querySelector('#resultSearch');
function filterBook() {
    resultSearch.innerHTML = '';
    const textSearch = searchBook.value.toLowerCase();
    arrayColection.map((arraySearch) => {
        let title = arraySearch.title.toLowerCase();
        if (title.indexOf(textSearch) !== -1) {
            resultSearch.innerHTML += `
            <a href=${'#'+arraySearch.isbn}>${arraySearch.title}</a>`
        }
    })
    if (resultSearch.innerHTML === '') {
        resultSearch.innerHTML += `
            Disculpe no se encuentra el título solicitado, seguramente estamos trabajando para tenerlo`
    }
}
searchBotton.addEventListener('click', filterBook);
// searchBook.addEventListener('keyup');
let cardsCollection = document.getElementById('cardsCollection');
arrayColection.map((cardCollection) => {
    cardsCollection.innerHTML += `
     <div class="card mb-2" style="max-width: 1500px;">
       <div class="row no-gutters">
         <div class="col-md-2">
          <img src=${cardCollection.cover} class="card-img" style="max-height: 300px;" alt="...">
          </a>
         </div>
         <div class="col-md-8">
           <div class="card-body" id="${cardCollection.isbn}">
             <h1 class="card-title">${cardCollection.title}</h1>
             <h5>
             <p class="card-text">Titulo: ${cardCollection.title}</p>
             <p class="card-text">Autor: ${cardCollection.author}</p>
             <p class="card-text">Genero: ${cardCollection.gener}</p>
             <p class="card-text">Precio: ${cardCollection.price} </p>
             </h5>
           </div>
         </div>
       </div>
     </div>
   <div class="synopsis">
       <h5 class="text-muted font-weight-bold">Sinopsis</h5>
       <h1 class="title2">${cardCollection.title}</h1>
       <div class="summary">${cardCollection.summary}</div>
   </div>
   <br>
 <hr>
    `
})