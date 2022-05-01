export const pokemonData = async () => {
    const randomNumGenerator = () => {
        let number = 0
        while (number === 0) {
            number = Math.floor(Math.random()*150)
        }
        return number
    }
    
    const randomNumArr =[]
    const pokemonArr = []
        
    while (randomNumArr.length < 20) {
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