let arrayCardsCarrousel = [
  {
    title: 'eloquent javascript',
    cover: 'https://kbimages1-a.akamaihd.net/2434786f-8e20-46c2-a6ec-7f1fd3197dcb/1200/1200/False/eloquent-javascript-3rd-edition.jpg',
    summary: 'Este libro trata de como hacer que las computadoras hagan lo que tú quieres que hagan. Las computadoras son tan comunes como los destornilladores hoy en día, pero tienen mucha más complejidad oculta y, por lo tanto, son más difíciles de operar y entender. Para muchos siguen siendo cosas extrañas, un poco amenazadoras.'
  },
  {
    title: 'Writing code that nobody else can read',
    cover: 'https://external-preview.redd.it/1RhyWqFAkwPTydHOM05SyXgtf4NNJCBIvy4quaC2XTk.jpg?auto=webp&s=e094b9791d52cff1c537ad20df31b7e22d0aec29',
    summary: 'No matter how much experience you have with JavaScript, odds are you dont fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. Youll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.Like other books in the "You Dont Know JS" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery.Learn about scope, a set of rules to help JavaScript engines locate variables in your codeGo deeper into nested scope, a series of containers for variables and functionsExplore function- and block-based scope, "hoisting", and the patterns and benefits of scope-based hidingDiscover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries'
  },
  {
    title: 'Horoscopo Chino 2021',
    cover: 'https://kbimages1-a.akamaihd.net/0bc4ed69-105a-4ce7-beff-7aac330d91b4/1200/1200/False/horoscopo-chino-2021.jpg',
    summary: 'En el Horóscopo chino 2020 Ludovica Squirru anticipó que la rata de metal "cobrará intereses kármicos inolvidables y los pagarán los ciudadanos de cada país con la salud" y una vez más sus predicciones fueron acertadas. En este Horóscopo chino 2021, la astróloga más leída y best seller internacional, abre una esperanza: el Búfalo de Metal, venerado en China por ser el "símbolo de la integración familiar, la conservación de recursos, el trabajo arduo, el orden y la disciplina, nos enseñará a practicar la paciencia, el esfuerzo para lograr los objetivos, la rutina como ley para no perderse en el camino, los principios cósmicos, terrenales, y el retorno a la naturaleza". Este libro, un verdadero oráculo que permite conocernos íntimamente y tomar mejores decisiones en cada aspecto de la vida, incluye las predicciones mundiales y para todos los países del continente americano y España.'
  },
  {
    title: 'Birra',
    cover: 'https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/282/original/portada_birra_nicolas-salvarrey_201810091522.jpg',
    summary: 'Hubo un tiempo en que la cerveza artesanal no era ni una moda, ni una tendencia, ni una costumbre, ni un negocio. Apenas el delirio de unos pocos productores y el hobby de unos cuantos locos, aburridos de tomar siempre lo mismo. Los años hicieron que el delirio creciera y se fuera multiplicando. Sin embargo, una cosa sigue igual. La cerveza artesanal no es ni una moda, ni una tendencia, ni una costumbre, ni un negocio: es cultura y llegó para quedarse.'
  },
]

let cardsCarrousel = document.getElementById('cardsCarrousel');
arrayCardsCarrousel.map((cardCarrousel, place) => {
  let type ='';
  if (place == 0) {
    type = 'active';
  }
  cardsCarrousel.innerHTML += `
  
  <div class="carousel-item ${type}" data-interval="10000">
    <div class="card mb-3" style="max-width: 540px;">
     <div class="row no-gutters">
       <div class="col-md-4">
         <img src="${cardCarrousel.cover}" class="card-img" alt="...">
        </div>
       <div class="col-md-8">
         <div class="card-body-carrousel">
           <h5 class="card-title">${cardCarrousel.title}</h5>
           <p class="card-text">${cardCarrousel.summary}</p>
          </div>
       </div>
     </div>
    </div>
  </div>
  
  `
})