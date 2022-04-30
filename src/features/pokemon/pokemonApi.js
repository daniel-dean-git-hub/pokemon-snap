export const pokemonData = async () => {
    

    const randomNum = () => Math.floor(Math.random()*150)
    
    const randomNumArr =[]

    while (randomNumArr.length < 6) {
        randomNumArr.push(randomNum())
    }

    console.log(randomNumArr)

    const pokemonArr = []

    for (const number of randomNumArr) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then(response => response.json())
            .then(json => {
                const {id, name, sprites} = json
                const image = sprites.other['official-artwork']['front_default']
                pokemonArr.push({
                    id: id,
                    name: name,
                    image: image
                })
            })
    }

   return pokemonArr
}