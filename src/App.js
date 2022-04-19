import { useState, useEffect } from "react";

import "./App.css";
import DisplayDog from "./components/DisplayDog";
import DogOptions from "./components/DogOptions";
import DenseAppBar from "./components/AppBar";

const dogBreedsRaw = {
  affenpinscher: [],
  african: [],
  airedale: [],
  akita: [],
  appenzeller: [],
  australian: ["shepherd"],
  basenji: [],
  beagle: [],
  bluetick: [],
  borzoi: [],
  bouvier: [],
  boxer: [],
  brabancon: [],
  briard: [],
  buhund: ["norwegian"],
  bulldog: ["boston", "english", "french"],
  bullterrier: ["staffordshire"],
  cattledog: ["australian"],
  chihuahua: [],
  chow: [],
  clumber: [],
  cockapoo: [],
  collie: ["border"],
  coonhound: [],
  corgi: ["cardigan"],
  cotondetulear: [],
  dachshund: [],
  dalmatian: [],
  dane: ["great"],
  deerhound: ["scottish"],
  dhole: [],
  dingo: [],
  doberman: [],
  elkhound: ["norwegian"],
  entlebucher: [],
  eskimo: [],
  finnish: ["lapphund"],
  frise: ["bichon"],
  germanshepherd: [],
  greyhound: ["italian"],
  groenendael: [],
  havanese: [],
  hound: ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
  husky: [],
  keeshond: [],
  kelpie: [],
  komondor: [],
  kuvasz: [],
  labradoodle: [],
  labrador: [],
  leonberg: [],
  lhasa: [],
  malamute: [],
  malinois: [],
  maltese: [],
  mastiff: ["bull", "english", "tibetan"],
  mexicanhairless: [],
  mix: [],
  mountain: ["bernese", "swiss"],
  newfoundland: [],
  otterhound: [],
  ovcharka: ["caucasian"],
  papillon: [],
  pekinese: [],
  pembroke: [],
  pinscher: ["miniature"],
  pitbull: [],
  pointer: ["german", "germanlonghair"],
  pomeranian: [],
  poodle: ["miniature", "standard", "toy"],
  pug: [],
  puggle: [],
  pyrenees: [],
  redbone: [],
  retriever: ["chesapeake", "curly", "flatcoated", "golden"],
  ridgeback: ["rhodesian"],
  rottweiler: [],
  saluki: [],
  samoyed: [],
  schipperke: [],
  schnauzer: ["giant", "miniature"],
  setter: ["english", "gordon", "irish"],
  sheepdog: ["english", "shetland"],
  shiba: [],
  shihtzu: [],
  spaniel: [
    "blenheim",
    "brittany",
    "cocker",
    "irish",
    "japanese",
    "sussex",
    "welsh",
  ],
  springer: ["english"],
  stbernard: [],
  terrier: [
    "american",
    "australian",
    "bedlington",
    "border",
    "cairn",
    "dandie",
    "fox",
    "irish",
    "kerryblue",
    "lakeland",
    "norfolk",
    "norwich",
    "patterdale",
    "russell",
    "scottish",
    "sealyham",
    "silky",
    "tibetan",
    "toy",
    "welsh",
    "westhighland",
    "wheaten",
    "yorkshire",
  ],
  tervuren: [],
  vizsla: [],
  waterdog: ["spanish"],
  weimaraner: [],
  whippet: [],
  wolfhound: ["irish"],
};
const dogBreeds = Object.keys(dogBreedsRaw);

// pull 4 dogs randomly from dogBreeds, set one of them to be "selected"
function getDogs(dogBreeds) {
  const randomDoggos = [];

  for (let i = 0; i < 4; i++) {
    randomDoggos.push({
      breed: dogBreeds[Math.floor(Math.random() * dogBreeds.length)],
      selectedBreed: false,
    });
  }

  const dogSelection = Math.floor(Math.random() * randomDoggos.length);

  randomDoggos[dogSelection].selectedBreed = true;

  return randomDoggos;
}

function App() {
  const [randomDogs, setRandomDogs] = useState(getDogs(dogBreeds));
  // selectionStatus set in DogOption through DogOptions
  const [selectionStatus, setSelectionStatus] = useState(null);
  const [scoreCount, setScoreCount] = useState(0);

  function setNewDogs() {
    setRandomDogs(getDogs(dogBreeds));
  }

  // get index of "selected" dog
  const selectedDog = randomDogs.findIndex((dog) => dog.selectedBreed === true);

  return (
    <div className="App">
      <DenseAppBar scoreCount={scoreCount}/>
      <DisplayDog
        newDogs={() => {
          setNewDogs();
          setSelectionStatus(null);
        }}
        selectedDog={randomDogs[selectedDog].breed}
        scoreCount={scoreCount}
      />
      <DogOptions
        dogState={[selectionStatus, setSelectionStatus]}
        dogsList={randomDogs}
        setScore={setScoreCount}
      />
    </div>
  );
}

export default App;
