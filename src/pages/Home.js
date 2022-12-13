import React, { useState } from "react";
import uploadIcon from "../images/upload_icon.png";
import "../stylesheets/Home.css";

const Home = () => {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const movieArray = [];

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const getMovieNames = (arr) => {
    arr.forEach(element => {
       movieArray.push(element["Name"]); 
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        console.log(text);
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
    getMovieNames(array);

    console.log(movieArray);
    sendPostRequest();
  };

  const sendPostRequest = () => {
    var userInfo = {
      email: email,
      username: username,
      films: []
    }
    
    for (var i = 0; i < movieArray.length; i++) {
      userInfo.films.push(movieArray[i]);
    }

    if (userInfo.films.length > 0) {
      fetch('http://localhost:9000', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo)
      }).then(() => {
        console.log("Sent User Info");
      });
    } else {
      console.log("Empty films array will not send fetch request");
    }

    console.log(userInfo);
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div className="HomeContainer" style={{ textAlign: "center" }}>
      <h1 className="HomeHeader">Import Letterboxd Data</h1>
      <div className="FormHolder">
        <form>
            <label> Email: 
              <input type='text' name='email' onChange={e => setEmail(e.target.value)} id="emailInput"/>
            </label>
            <br />
            <label> Username: 
              <input type='text' name='username' onChange={e => setUsername(e.target.value)} id="usernameInput"/>
            </label>
            
            <div className="InputHolder">
                <img src={uploadIcon} className="UploadImage"></img>
                
                <br />

                <input
                type={"file"}
                id={"csvFileInput"}
                accept={".csv"}
                onChange={handleOnChange}
                className="InputField"
                src={uploadIcon}
                />
            </div>
            
            <br />

            <button
            className="ImportButton"
            onClick={(e) => {
                handleOnSubmit(e);
            }}
            >
            IMPORT CSV
            </button>
        </form>
      </div>
    </div>
  );
}

export default Home