export const pokemonData = async (pokemon = 151, cardPair = 5) => {
    console.log(pokemon)
    console.log(cardPair)

    const randomNumGenerator = () => {
        let number = 0
        while (number === 0) {
            number = Math.floor(Math.random()*pokemon)
        }
        return number
    }
    
    const randomNumArr =[]
    const pokemonArr = []
        
    while (randomNumArr.length < cardPair) {
        let newNumber = randomNumGenerator()
        const currentMatch = randomNumArr.filter(num => num === newNumber)
        while(currentMatch[0] === newNumber) {
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