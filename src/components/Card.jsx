import React from "react";

function Card(props) {
  //a basic structure is first required
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Card;
// the given fields like name,emoji,meaning are taken from the array
