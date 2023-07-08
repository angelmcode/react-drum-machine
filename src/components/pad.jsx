import { useEffect } from 'react';
import '../stylesheets/pad.css';

function Pad({ namePad, source, id, volume, idMain, sounds }) {
  // console.log(typeof id);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress );
    return () => {
      document.removeEventListener("keydown", handleKeyPress );
    }
  }, [sounds, volume]);

  const handleKeyPress = (e) => {
    if (e.key === id.toLowerCase() || e.key === id) {
      play();
      // document.getElementById("display").innerText = idMain;
    }
  };

  const play = () => {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.volume = volume;
    sound.play();
    document.getElementById("display").innerText=idMain;
    document.getElementById(idMain).classList.remove("drum-pad");
    document.getElementById(idMain).classList.add("drum-pad-press");
    setTimeout(() => {
      document.getElementById(idMain).classList.remove("drum-pad-press");
      document.getElementById(idMain).classList.add("drum-pad");
    }, 100);
    
    console.log(idMain);
  };

  return (
    <div>
        <div id={idMain} onClick={play} className='drum-pad'>
        {namePad}
        <audio className="clip" id={id} src={source}></audio>
        </div>
    </div>
  )
}

export default Pad;