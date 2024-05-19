// Shows a single Pokemon, with their name, image, and type.

function Pokecard({ id, name, type, exp }) {
  return (
    <>
      <h3>{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <div>Type: {type}</div>
      <div>EXP: {exp}</div>
    </>
  );
}

export { Pokecard };
