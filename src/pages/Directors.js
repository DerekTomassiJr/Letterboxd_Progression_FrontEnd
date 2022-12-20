import TalentCard from "../components/TalentCard";
import React, {useEffect, useState} from 'react';
import "../stylesheets/Directors.css"
import axios from "axios";

// class Directors extends React.Component{
//     constructor() {
//         super();
//         this.state = {data: []};
//     }

//     componentDidMount() {
//         axios.get('http://localhost:9000/directorPageAPI')
//         .then( res => {
//             // setDirectorInfo(res.data.Directors);
//             console.log("CDM: " + res.json);
//             this.setState({data: res.data});
//         });  
//     }

//     render() {
//         return (
//             <div id="DirectorPageContent">
//                 <h1 id="PageHeader">Directors Filmography</h1>
//                 {console.log("Director Info: " + this.state.data)}
//                 <TalentCard 
//                     // directorName={ directorInfo[0].name }
//                     // directorImagePath={ directorInfo[0].image }
//                     // directorFilms={ directorInfo[0].films }
//                 />
//             </div>
//         )
//     }
// }

// export default Directors;

export default function Home() {
    const [directorInfo, setDirectorInfo] = useState([])    

    useEffect(() => {
        var userInfo = {
            email: "derektomassi@me.com"
        }

        axios.post('http://localhost:9000/directorPageAPI', userInfo)
        .then((res) => {
            console.log(res.data.Directors);
            setDirectorInfo(res.data.Directors);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div id="DirectorPageContent">
            <h1 id="PageHeader">Directors Filmography</h1>
            {directorInfo.map
            (dI => <TalentCard 
                directorName={ dI.name }
                directorImagePath={ dI.image }
                directorFilms={ dI.films }
            />)}
        </div>
    )
}