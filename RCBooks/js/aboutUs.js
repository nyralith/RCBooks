let arrayTeam = [
    {
        title: 'Andres Salinas',
        position: 'Back End Designed',
        avatar: 'img/andres.png',
        summary: 'amigo del covid19'
    },
    {
        title: 'Christian Romano',
        position: 'form design',
        avatar: 'img/christian.png',
        summary: 'Soñador compulsivo, entusiasta de la pizza a punto de convertirse en tortuga ninja'
    },
    {
        title: 'Jime Bulacio',
        position: 'Scrum Master',
        avatar: 'img/jime.png',
        summary: 'Apasionada por la escalada deportiva y la fotografía, sobreviviente de la Ingenieria'
    },
    {
        title: 'Nico Delgado',
        position: 'css design night shift',
        avatar: 'img/nico.png',
        summary: 'Entusiasta de juegos, ávido gamer, amante de michis y futuro fullstack developer'
    },
    {
        title: 'Valeria Lopez',
        position: 'Sub Scrum Master',
        avatar: 'img/vale.png',
        summary: 'Futura Full Stack, adicta al mate y a los nuevos desafíos'
    },
]

let cardsTeam = document.getElementById('cardsTeam');
arrayTeam.map((cardTeam) => {
    cardsTeam.innerHTML += `
    <div class="card cardTeam text-light cardAbout mb-2">
        <img class="card-img-top"
          src="${cardTeam.avatar}"
          alt="Card image cap">
        <div class="card-body">
          <h1 class="card-title">${cardTeam.title}</h1>
          <h5 class="card-title">${cardTeam.position}</h5>
          <p class="card-text">${cardTeam.summary}</p>
        </div>
    `
})