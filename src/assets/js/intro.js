import React from "react";
import ReactDOM from "react-dom";

var Intro = React.createClass({
  toggleBgColor: function() {
    document.getElementsByTagName('body')[0].classList.toggle('light');
    document.getElementsByTagName('body')[0].classList.toggle('dark');
  },
  render: function() {
    const classnames = 'btn btn-6 btn-6f';
    return (
      <header className="box">
        <h1>Hello Electron</h1>
        <p>I am a young desktop application ready to grow</p>
        <button className={classnames} onClick={this.toggleBgColor}>I am a big button</button>
      </header>
    );
  }
});

ReactDOM.render(
  <Intro />,
  document.getElementById('intro')
);
