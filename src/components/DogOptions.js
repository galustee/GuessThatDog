import { useState } from "react";
import classes from "./DogOption.module.css";

import DogOption from "./DogOption";

const DogOptions = (props) => {
  // dogState initially set in App
  const [selectionStatus, setSelectionStatus] = props.dogState;

  return (
    <div>
      {props.dogsList.map((dog, idx) => (
        <DogOption
          setSelectionStatus={setSelectionStatus}
          key={idx}
          dogBreed={dog}
          setScore={props.setScore}
        />
      ))}
      {selectionStatus && <p className={classes.correct}>Correct!</p>}
      {selectionStatus === false && (
        <p className={classes.incorrect}>Incorrect!</p>
      )}
    </div>
  );
};

export default DogOptions;
