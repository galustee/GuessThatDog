import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./DisplayDog.module.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import DenseAppBar from "./AppBar";

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
      <Button
        variant="contained"
        onClick={props.newDogs}
        color="secondary"
        sx={{ m: 1 }}
      >
        New Doggo
      </Button>
      <Card>
        <CardContent>
        <img src={dogData.message}></img>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisplayDog;
