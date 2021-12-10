const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

button.addEventListener('click',(e) => {
    e.preventDefault();
    traerPokemon(input.value);

})

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    crearPokemon(data);
                    console.log(data);
            });
            } else {
          alert(`Ese tal pokemon ${pokemon} no existe`);
        }
      })
      .catch(function(error) {
        alert('Hubo un problema con la petición Fetch:' + error.message);
      });
}


function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.other.dream_world.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const p = document.createElement('p');
    p.textContent = `Este es el pokemon ${pokemon.id}`;
    const phability = document.createElement('p');

    phability.textContent = `Habilidades:\n`;
    let lengthabilities = pokemon.abilities.length;
    console.log(lengthabilities);
    for(let i =0; i<lengthabilities;i++){
        phability.textContent +=`${pokemon.abilities[i].ability.name}, `;
    }

    const pweight = document.createElement('p');
    pweight.textContent = `Peso: ${pokemon.weight} kg`;
    
    


    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);  
    div.appendChild(p);
    div.appendChild(phability);
    div.appendChild(pweight);
    
    pokemonContainer.appendChild(div)
}