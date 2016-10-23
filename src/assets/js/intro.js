import React from "react";
import ReactDOM from "react-dom";
import Tone, { /*Sampler*/ } from "tone";

var Intro = React.createClass({
  playToneJS: function() {
    var synth = new Tone.MembraneSynth().toMaster();
    synth.triggerAttackRelease("C2", "8n");
  },
  toggleBgColor: function() {
    document.getElementsByTagName('body')[0].classList.toggle('light');
    document.getElementsByTagName('body')[0].classList.toggle('dark');
  },
  onClick: function(event){
      this.playToneJS();
      this.toggleBgColor();
  },
  render: function() {
    const classnames = 'btn btn-6 btn-6f';
    return (
      <header className="box">
        <h1>Hello Electron</h1>
        <p>I am a young desktop application ready to grow</p>
        <button className={classnames} onClick={this.onClick}>I am a sound button</button>
      </header>
    );
  }
});

ReactDOM.render(
  <Intro />,
  document.getElementById('intro')
);
