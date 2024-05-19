// Shows a single Pokemon, with their name, image, and type.

function Pokecard({ id, name, type, exp, isWinner }) {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
        <div>Type: {type}</div>
        <div>EXP: {exp}</div>
      </div>

      <div>{isWinner == true ? "THIS HAND WINS!" : ""}</div>
    </>
  );
}

export { Pokecard };
