// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.
import { Pokecard } from "./Pokecard";
import "./App.css";

// Pokémon data
const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];
// get random pokemon
function getRandomPokemon(pokemonArray) {
  const randomIndex = Math.floor(Math.random() * pokemonArray.length);
  return pokemonArray[randomIndex];
}

// pokegame
function Pokegame() {
  let player1 = [];
  player1.push(getRandomPokemon(pokemon));
  player1.push(getRandomPokemon(pokemon));
  player1.push(getRandomPokemon(pokemon));
  player1.push(getRandomPokemon(pokemon));

  let player2 = [];
  player2.push(getRandomPokemon(pokemon));
  player2.push(getRandomPokemon(pokemon));
  player2.push(getRandomPokemon(pokemon));
  player2.push(getRandomPokemon(pokemon));

  // Check which is the winner
  function totalExp(player) {
    return player.reduce((sum, poke) => sum + poke.base_experience, 0);
  }

  let player1IsWinner = false;
  let player2IsWinner = false;
  if (totalExp(player1) > totalExp(player2)) {
    player1IsWinner = true;
  } else if (totalExp(player1) < totalExp(player2)) {
    player2IsWinner = true;
  } else {
    player1IsWinner = true;
    player2IsWinner = true;
  }

  return (
    <>
      <div className="pokedex">
        {player1.map((poke) => {
          return (
            <div>
              <Pokecard
                key={poke.id}
                id={poke.id}
                name={poke.name}
                type={poke.type}
                exp={poke.base_experience}
                isWinner={player1IsWinner}
              />
            </div>
          );
        })}
      </div>
      <p>--------------------vs--------------------</p>
      <div className="pokedex">
        {player2.map((poke) => {
          return (
            <div>
              <Pokecard
                key={poke.id}
                id={poke.id}
                name={poke.name}
                type={poke.type}
                exp={poke.base_experience}
                isWinner={player2IsWinner}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pokegame;
