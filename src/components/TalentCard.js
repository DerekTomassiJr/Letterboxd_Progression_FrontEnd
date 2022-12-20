import {useState} from 'react';
import PropTypes from 'prop-types'
import "../stylesheets/TalentCard.css";
import ExpandIcon from "../images/expand_icon.png";
import MovieCard from './MovieCard';

const findCompletionRate = (directorFilms) => {
    var counter = 0;
    
    directorFilms.forEach(element => {
        if (element.isWatched === true) {
            counter++;
        }
    })

    return counter + "/" + directorFilms.length; 
}

const progressBarCalculation = (directorFilms) => {
    var counter = 0;
    
    directorFilms.forEach(element => {
        if (element.isWatched === true) {
            counter++;
        }
    })

    var percentage = counter / directorFilms.length * 200;

    return percentage;
}

const TalentCard = ({ directorName, directorImagePath, directorFilms}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandClick = () => {
        setIsExpanded(current => !current);
    }
    
    return ( 
        <div style={{height: isExpanded ? "auto" : "",}} className="TalentContentHolder">
            <img src={ directorImagePath } alt="Tarantino Pic" className="TalentCardPicture"></img>
            <h2 className="TalentCardHeader">{ directorName }</h2>
            <div className="ProgressBarBackground"></div>
            <div className="ProgressBar" style={{
                width: progressBarCalculation(directorFilms)
            }}></div>
            <p className="CompletionRate">{ findCompletionRate(directorFilms) }</p>
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
                        isWatched={dF.isWatched}/> 
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