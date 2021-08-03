import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const [images, setImages] = useState(poke.sprites.front)

  function handleClick() {
    if (images === poke.sprites.front) {
      setImages(poke.sprites.back)
    }
    else {
      setImages(poke.sprites.front)
    }


  }
  return (
    <Card>
      <div>
        <div className="image">
          <img src={images} onClick={handleClick} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
