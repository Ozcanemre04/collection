let animeList = [{
        image:"",
        name: "Attaque des titans",
        year: 2013,
        genre: "Aventure, Action, Animation",
        description: "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des Titans et les annihiler jusqu’au dernier…",
        author:" Yasuko Kobayashi",

    },
    {
        image:"",
        name: "mushoku tensei",
        year: 2021,
        genre: "Action, Aventure, Drame, Ecchi, Fantaisie, Isekai, Magie",
        description: "Ici, je vais me transcender !' Un anonyme de 34 ans, célibataire endurci, reclus et au chômage se fait écraser par un camion peu après avoir été chassé de la maison familiale. Quelle ne fut pas sa surprise lorsqu'il se réveilla bébé dans un monde d'épées et de magie ! Rudeus, comme il s'appelait désormais, jura alors de réussir sa deuxième vie et de tirer un trait sur l'immonde déchet qu'il avait été 34 ans durant. Dès son jeune âge, il nouera de nombreux liens dans ce nouveau monde, notamment une solide amitié avec trois fillettes, avant de partir pour une aventure aussi palpitante que périlleuse. Une seconde chance lui a été accordée... et elle ne sera pas de tout repos !'",
        author:"Rifujin na Magonote",

    },
    {
        image:"",
        name: "Death Note",
        year: 2013,
        genre: "lorem",
        description: "lroem",
        author:"ll",

    },
    {
        image:"",
        name: "Demon slayer",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Berserk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Tower of God",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image: "",
        name: "Kingdom",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Hajime no ippo",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Haikyuu",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Bloody Brat",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
]

let main = document.querySelector('main')

for (let i = 0; i < animeList.length; i++) {
    let figure = document.createElement('figure');
    main.appendChild(figure);
    /*img*/
    let img = document.createElement('img')
    img.innerHTML = animeList[i].image;
    figure.appendChild(img)

    /*name*/
    let div  =document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerHTML = animeList[i].name
    div.appendChild(h3)
    /*genre*/
    let h4 = document.createElement('h4')
    h4.innerHTML = animeList[i].genre
    div.appendChild(h4)
    figure.appendChild(div)
    /*description*/
    let paragraphe = document.createElement('p')
    paragraphe.innerHTML = animeList[i].description
    figure.appendChild(paragraphe)
    /*year*/
    let italic = document.createElement('em');
    italic.innerHTML = animeList[i].year;
    figure.appendChild(italic)


}

