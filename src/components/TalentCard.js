import {useState} from 'react';
import PropTypes from 'prop-types'
import "../stylesheets/TalentCard.css";
import TarantinoPic from "../images/tarantino_headshot.png";
import ExpandIcon from "../images/expand_icon.png";
import OUATPoster from "../images/Movie_Posters/Once-Upon-a-Time-in-Hollywood-Poster.jpg";
import PulpFictionPoster from "../images/Movie_Posters/Pulp-Fiction-Poster.webp";
import InglouriousBasterdsPoster from "../images/Movie_Posters/inglourious-basterds-poster.jpg";
import DjangoUnchainedPoster from "../images/Movie_Posters/django-unchained-poster.jpg";
import KillBillPoster from "../images/Movie_Posters/kill-bill-poster.jpg";
import KillBill2Poster from "../images/Movie_Posters/kill-bill-2-poster.jpg";
import JackieBrownPoster from "../images/Movie_Posters/jackie-brown-poster.webp";
import DeathProofPoster from "../images/Movie_Posters/death-proof-poster.jpg";
import ReservoirDogsPoster from "../images/Movie_Posters/reservoir-dogs-poster.jpg";
import TheHateFulEightPoster from "../images/Movie_Posters/the-hateful-eight-poster.jpg";
import MovieCard from './MovieCard';


const TalentCard = ({ directorName, directorImagePath, directorFilms }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandClick = () => {
        setIsExpanded(current => !current);
    }
    
    return ( 
        <div style={{height: isExpanded ? "auto" : "",}} className="TalentContentHolder">
            <img src={ directorImagePath } alt="Tarantino Pic" className="TalentCardPicture"></img>
            <h2 className="TalentCardHeader">{ directorName }</h2>
            <div className="ProgressBarBackground"></div>
            <div className="ProgressBar"></div>
            <p className="CompletionRate">9/10</p>
            <img src={ ExpandIcon } alt="Expand Icon" className="TalentCardExpandIcon" 
            style={{
                transform: isExpanded ? "rotate(-180deg)" : "",
            }}
            onClick={expandClick}></img>
            {/* Expanded Items */}
            <div className="TalentContentHolderExtension">
                {directorFilms.map(dF => 
                    <div className="MovieCard">
                       <MovieCard 
                        posterPath = {dF.image}
                        title = {dF.title}
                        isWatched={true}/> 
                    </div>    
                )}
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    directorName: PropTypes.string,
    directorImagePath: PropTypes.string,
    directorFilms: PropTypes.object,
}

export default TalentCard