import { useState } from 'react';
import '../stylesheets/drum_machine.css';
import Display from './display';
import Pad from './pad';
import Switch from './switch';
import Volume from './volume';
import { soundsA, soundsB, soundsOnOff } from "../data/sounds.js";

function DrumMachine() {
  // console.log(soundsA);
  // console.log(soundsB);


  const [buttonOnOff, setButtonOnOff] = useState(true);

  const [buttonOnOff2, setButtonOnOff2] = useState(true);

  const [volume, setVolume] = useState(0.5);

  const [sounds, setSounds] = useState(soundsA);

  const [display, setDisplay] = useState("ON");

  const buttonClic = () => {
    if (buttonOnOff === true) {
      setSounds(soundsOnOff);
      setButtonOnOff(false);
      setDisplay("OFF");
    } else if (buttonOnOff===false && buttonOnOff2 === true) {
      setSounds(soundsA);
      setButtonOnOff(true);
      setButtonOnOff2(true);
      setDisplay("ON");
    } else if (buttonOnOff===false && buttonOnOff2 === false) {
      setSounds(soundsB);
      setButtonOnOff(true);
      setButtonOnOff2(false);
      setDisplay("ON");
    }
  }

  const buttonClic2 = () => {
    if (buttonOnOff2 === true && sounds === soundsA) {
      setSounds(soundsB);
      setButtonOnOff2(false);
      setDisplay("Sounds Group B");
    } else if (buttonOnOff2 === false && sounds === soundsB) {
      setSounds(soundsA);
      setButtonOnOff2(true);
      setDisplay("Sounds Group A");
    }
  }

  const onChange = (e) => {
    setVolume(e.target.value / 100);
    setDisplay(`volume: ${Math.round(volume * 100)}`);
  }

  // console.log(sounds);
  // console.log(volume);
  // console.log(sounds.map((sounds)=>{return sounds.text}));

  return (
    <div className='container_drum_machine'>
        <div className='container_pad'>
        {
        sounds.map(
          (sounds) => <Pad
          key={sounds.key}
          id={sounds.key}
          idMain={sounds.text}
          sounds={sounds}
          volume={volume}
          namePad={sounds.key}
          source={sounds.src}
          />
          )
        }
        </div>
        <div className='main_container_controls'>
          <div className='container_controls'>
            <Switch title={"ON/OFF"} buttonClic={buttonOnOff} manageClick={buttonClic} />
            <Display volume={display}/>
            <Volume onChange={onChange} volume={volume}/>
            <Switch title={"A/B"} buttonClic={buttonOnOff2} manageClick={buttonClic2} />
          </div>
        </div>
    </div>
  )
}

export default DrumMachine