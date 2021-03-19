import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(entry) {
  //3rd step: using 'entry' as each array object fill the cards
  return (
    <Card //basic structure
      key={entry.id}
      emoji={entry.emoji} // the fields will fill the cards
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  //this is like main in java
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

// line 24: passing the array emojipedia into createCard fn: 2ndstep
