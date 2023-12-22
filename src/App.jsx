import React, { useState ,useRef} from "react"
import { Howl } from 'howler';;
import sound from "./assets/koyal.mp3";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [inputWord, setInputWord] = useState('');
  const [output, setOutput] = useState('');
  const audioRef = useRef(null);

  const magicWords = [
    "msd", "thala", "ronaldo", "seven", "7", "csk", 
    "chennai", "bole jo koyal", "yellow", "ms", 
    "dhoni", "Ranchi", "ziva"
  ];

  const handleButtonClick = () => {
    if (inputWord.length === 7 || magicWords.includes(inputWord.toLowerCase())) {
      setOutput("thala for the reason!!");
      play();
      setInputWord('')
    } else {
      setOutput("Enter a seven-letter ");
      setInputWord('')
    }
  };

  function play(){
    const audio = new Audio(sound);
    audio.volume = 0.3; // Set the volume (0.0 to 1.0)
    audio.play();
    // Store the audio reference in the useRef hook
    audioRef.current = audio;
  }
 

  return (
    <>
    <div className="half"></div>
      <div className="container">
        <h2> Magical Seven !!!</h2>
        <input
          type="text"
          name="input"
          className="input"
          placeholder="Write Any Seven Magical letter..."
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button className="btn" onClick={handleButtonClick}> Find </button>
        {output && <p>{output}</p>}
      </div>
    </>
  );
}


export default App;
