const img = document.createElement('img')


let ThisName = "Pokemon"
let ThisSrc = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
const renderPokemon = (url) => {
    //
    fetch(url)
    .then(res => res.json())
    .then(data => {
        ThisSrc = data.sprites.front_default
        ThisName = data.name
        img.src = ThisSrc // url of the image from the 'front_default' property
        img.alt = ThisName // name of the pokemon

document.body.append(img)
    }
    )
}


const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
renderPokemon(url)

