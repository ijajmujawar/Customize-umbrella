import './App.css';
import React, { useRef,useState } from "react";
import im1 from "./img/Blue umbrella.png";
import im2 from "./img/Pink umbrella.png";
import im3 from "./img/Yellow umbrella.png";

function App() {
  let inputRef = useRef(null);
  const [name, setName] = useState(im1);

 
  function pink() {
    document.body.style.background = "lightpink";
    inputRef.current.style.background="#d64161"
    setName(im2)
  };
  function yellow() {
    document.body.style.background = "lightyellow";
    inputRef.current.style.background="#feb236"
    setName(im3)
  }
  function blue() {
    document.body.style.background = "rgb(182, 215, 236)";
    inputRef.current.style.background="blue"
    setName(im1)
  }
  return (
    <div className="App">
      <div >
        <img id="img1" alt="umbrella" src={name} /></div>
        <div className="content">
          <h1>Custom Umbrella</h1>
          <div onClick={blue} className="blue"></div>
          <div onClick={pink} className="pink"></div>
          <div onClick={yellow} className="yellow"></div>
          <h3>Customize your umbrella</h3>
          <b>Upload a logo for an instant preview</b>
          <p>.png and .jpg files only. Max file size is 5MB.</p>
          <button ref={inputRef} id="button">UPLOAD LOGO</button>
        </div>
      
    </div>
  );
}
export default App;
