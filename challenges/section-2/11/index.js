const nums = [1, 2, 3, 4, 5]

let newNums = nums.map((x) => x * x)

const names = ['alice', 'bob', 'charlie', 'danielle']

function capitalize(x) {
    return x[0].toUpperCase() + x.slice(1);
}

let CapitalizedNames = names.map(x => capitalize(x))

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']
let wrapPokemon = pokemon.map(p => `<p>${p}</p>`)

console.log(newNums, CapitalizedNames, wrapPokemon)