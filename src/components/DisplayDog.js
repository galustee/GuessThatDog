import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./DisplayDog.module.css";

const DisplayDog = (props) => {
  const getDog = async () => {
    try {
      const resp = await axios.get(
        `https://dog.ceo/api/breed/${props.selectedDog}/images/random`
      );
      //console.log(resp.data)
      setDogData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  // triggers re-rendering of the dog image
  useEffect(() => {
    //console.log(props.selectedDog);
    getDog();
  }, [props.selectedDog]);

  const [dogData, setDogData] = useState({ message: null });

  return (
    <div className={classes.doggo}>
      <div className={classes.score}>Score: {props.scoreCount}</div>
      <button onClick={props.newDogs} className={classes.button}>
        New Doggo
      </button>
      <img src={dogData.message}></img>
    </div>
  );
};

export default DisplayDog;
