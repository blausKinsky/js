const synth = new Tone.Synth().toDestination()
synth.triggerAttackRelease('C4', '8n')

let playbutton = document.getElementById("play").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
