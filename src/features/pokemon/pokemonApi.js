export const pokemonData = async () => {
    const randomNumGenerator = () => Math.floor(Math.random()*150)
    const randomNumArr =[]
    const pokemonArr = []

    while (randomNumArr.length < 10) {
        let newNumber = randomNumGenerator()

        while(randomNumArr.filter(num => num === newNumber).length > 0) {
            newNumber = randomNumGenerator()
        }

        randomNumArr.push(newNumber)
    }

    for (const number of randomNumArr) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then(response => response.json())
            .then(json => {
                const {id, name, sprites} = json
                const image = sprites.other['official-artwork']['front_default']
                pokemonArr.push({
                    name: name,
                    number: id,
                    image: image
                })
            })
    }

   return pokemonArr
}