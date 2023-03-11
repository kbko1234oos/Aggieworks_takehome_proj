import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [catPicUrl, setcatPicUrl] = useState('');
  const [dogPicUrl, setdogPicUrl] = useState('');

  const [showCatComment, setshowCatComment] = useState(false);
  const [showDogComment, setshowDogComment] = useState(false);

  const getCatPic = () => {
    console.log('getCatPic called');
    fetch("https://cataas.com/cat?json=true")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {}, 1000);
      setcatPicUrl("https://cataas.com" + data["url"]);
      setshowCatComment(true);
    });
  };

  const getDogPic = () => {
    console.log('getDogPic called');
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {}, 1000);
      setdogPicUrl(data["message"]);
      setshowDogComment(true);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Which do you prefer?
        </p>
      </header>
      <div className="bothColumns">
        <div className="catColumn"> 
          <button className="catButton" onClick={getCatPic}>Cats</button>
            {showCatComment && <p>
              Good choice. Here's a picture of a cat.
            </p>}
            <div>
              <img src={catPicUrl} className="Picture"/>
            </div>
          </div>
        <div className="dogColumn"> 
          <button className="dogButton" onClick={getDogPic}>Dogs???</button>
            {showDogComment && <p>
              Yay!!! Here's a doggo pic!!!
            </p>}
            <div>
              <img src={dogPicUrl} className="Picture"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
