import classes from "./DogOption.module.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const DogOption = (props) => {
  const [buttonStatus, setButtonStatus] = useState(true);

  const checkIfCorrect = () => {
    if (props.dogBreed.selectedBreed) {
      props.setSelectionStatus(true);
      setButtonStatus(true);
      props.setScore((prevState) => prevState + 1);
    } else {
      props.setSelectionStatus(false);
      setButtonStatus(false);
      props.setScore((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setButtonStatus(true);
  }, [props.dogBreed]);

  return (
    <Button
      sx={{mx: 1}}
      variant="contained"
      onClick={checkIfCorrect}
      disabled={!buttonStatus}
      //className={buttonStatus ? classes.dogButton : classes.dogButtonIncorrect}
    >
      {props.dogBreed.breed}
    </Button>
  );
};

export default DogOption;
