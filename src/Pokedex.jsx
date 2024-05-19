// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.
import { Pokecard } from "./Pokecard";

function Pokedex() {
  let pokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];
  return (
    <div>
      {pokemon.map((poke) => {
        return (
          <Pokecard
            key={poke.id}
            id={poke.id}
            name={poke.name}
            type={poke.type}
            exp={poke.exp}
          />
        );
      })}
    </div>
  );
}

export default Pokedex;
