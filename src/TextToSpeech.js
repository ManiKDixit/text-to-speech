import React, { useEffect, useState } from 'react'
    


const TextToSpeech = ({text}) => {
    //creating useState variables
    const[isPaused, setIsPaused] = useState(false);
    const[utterance , setUtterance] = useState(null);
    const[voice,setVoice] = useState(null);
    const[pitch,setPitch] = useState(1);
    const[rate,setRate] = useState(1);
    const [volume,setVolume] = useState(1);

//Using useEffect hook to see changes on render based on the text dependency

useEffect(()=> {
    // setting us a synth variable that will store the output of SPeechSynthesis API
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    setUtterance(u);
    setVoice(voices[0]);

    return () => {
        synth.cancel();
    };
}, [text]); //text is the dependency of use effect

const handlePlay = () => {
    const synth = window.speechSynthesis;

    if(isPaused) {
        synth.resume();
    }else{
        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        synth.speak(utterance);
    }

    setIsPaused(false);
};

const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
};

const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
};

const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
};
    
const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
};


const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));

};

const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
}

const styles = {
    div : {
        padding:'5px',
        marginBottom:'10px',
        backgroundColor: '',
        
    },
    label : {
       
        //marginBottom:'5px',
        padding:'2px',
        display:'flex',
       
    },

    space :{
        marginLeft:'20px'
    }
}


return (
   
    <div style={styles.div}>
        <label style={styles.label}>
            Voice:
            <select style={styles.space} value={voice?.name} onChange={handleVoiceChange}>
                {window.speechSynthesis.getVoices().map((voice) => (
                    <option key={voice.name} value={voice.name}>{voice.name}</option>
                ))}
            </select>
        </label>
        <br />

        <label style={styles.label}>
            Pitch:
            <input 
            type='range'
            min = '0.5'
            max = '5'
            step = '0.1'
            value={pitch}
            onChange={handlePitchChange}
            style={styles.space}
            />
        </label>
        <br />

        <label style={styles.label}>
            Speed:
            <input
            type='range'
            min='0.5'
            max='2'
            step='0.1'
            value={rate}
            onChange={handleRateChange}
            style={styles.space}
             />
        </label>
        <br />

        <label style={styles.label}>
            Volume:
            <input
            type='range'
            min='0'
            max='2'
            step='0.1'
            value={volume}
            onChange={handleVolumeChange}
            style={styles.space}
             />
        </label>
        <br />

       <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button> 
       <button onClick={handlePause}>Pause</button>
       <button onClick={handleStop}>Stop</button>
    </div>
    
)




}

export default TextToSpeech