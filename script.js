let animeList = [{
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "mushoku tensei",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lroem",
        author:"ll",

    },
    {
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image: "",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "Snk",
        year: 2013,
        genre: "lorem",
        description: "lorem",
        author:"ll",

    },
    {
        image:"",
        name: "hello",
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

