import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [clicked, setClicked] = useState(true)
  
  function onClickCard() {
    setClicked(clicked => !clicked)
  }

  return (
    <Card onClick={onClickCard}>
      <div>
        <div className="image">
          {clicked ? <img src={pokemon.sprites.front} alt="oh no!" /> : <img src={pokemon.sprites.back} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;