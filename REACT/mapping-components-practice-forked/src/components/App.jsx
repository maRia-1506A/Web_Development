import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

//1. create Entry component
//2. create props to replace hardcoded data
//3a. export the emojipedia const.

//3b. map through the emojipedia array and render entry components
function createEntry(makeEmoji) {
  return (
    <Entry
      key={makeEmoji.id}
      image={makeEmoji.emoji}
      title={makeEmoji.name}
      description={makeEmoji.meaning}
    />
    // like the const emojipedia below
  )

}

// const emojipedia = [
//   {
//     id: 1,
//     emoji: "💪",
//     name: "Tense Biceps",
//     meaning:
//       "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
//   },


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">

        {/* 2. create props to replace hardcoded data
        <Entry
          image="💪"
          title="Tense Biceps"
          descripstion="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        /> */}

        {/* 3b. map through the emojipedia array and render entry components */}
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
