import React, { useState } from "react";
import uploadIcon from "../images/upload_icon.png";
import "../stylesheets/Home.css";

const Home = () => {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
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
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
    getMovieNames(array);

    console.log(movieArray);
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div className="HomeContainer" style={{ textAlign: "center" }}>
      <h1 className="HomeHeader">Import Letterboxd Data</h1>
      <div className="FormHolder">
        <form>
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