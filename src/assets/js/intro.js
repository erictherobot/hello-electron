import React from "react";
import ReactDOM from "react-dom";
import Tesseract from 'tesseract.js'

var Intro = React.createClass({
  componentDidMount() {
      // const myImage = this.files; // for file input
      const myImage = './src/assets/img/OCR-Electron.png';
      console.log('Processing image. please wait...');
      this.setState(Tesseract.recognize(myImage).progress(function(results){console.log(results)}).then(function(results){console.log(results.text + 'Completed OCR Processing Using Tesseract.js!')}));
  },
  render: function() {
    // const classnames = 'btn btn-6 btn-6f btn-width custom-file-input';
    return (
      <header className="box">
        <h1>Hello Electron</h1>
        <p>View console to see the OCR processing using Tesseract.js</p>
        <img src="./assets/img/OCR-Electron.png" width="500" />
        {/* <input
          className={classnames}
          type="file"
          onChange={this.handleChange} /> */}
      </header>
    );
  }
});

ReactDOM.render(
  <Intro />,
  document.getElementById('intro')
);
