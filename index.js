
const heroImageDiv = document.getElementById('getSuperhero')

const getSuperHero = (id) => {
  fetch(`https://superheroapi.com/api.php/948184246226549/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json.powerstats)
      const superHero = json
      getAndShowStats(superHero) 
  })
  

}

const heroBtn = document.getElementById('heroBtn');
heroBtn.onclick = () => {
  let num = Math.ceil(Math.random()*731);
  getSuperHero(num);
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}


const getAndShowStats = (character) => {

  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" />`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  heroImageDiv.innerHTML = `${name}${img}${stats}`
}


const searchSuperhero = (name) => {
  fetch(`https://superheroapi.com/api.php/948184246226549/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
      getAndShowStats(hero) 
  })
}


const heroName = document.getElementById('searchTheName');
heroName.onclick = () => {
  searchSuperhero(searchInput.value);
}

const searchInput = document.getElementById('searchHero');
console.log(searchInput);