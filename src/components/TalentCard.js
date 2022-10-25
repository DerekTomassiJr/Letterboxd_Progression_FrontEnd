import {useState} from 'react';
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


export default function TalentCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandClick = () => {
        setIsExpanded(current => !current);
    }
    
    return ( 
        <div style={{height: isExpanded ? "941px" : "",}} className="TalentContentHolder">
            <img src={ TarantinoPic } alt="Tarantino Pic" className="TalentCardPicture"></img>
            <h2 className="TalentCardHeader">Quentin Tarantino</h2>
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
                <div className="MovieCard">
                    <MovieCard 
                    posterPath={OUATPoster}
                    title="Once Upon a Time in Hollywood"
                    isWatched={true}/>
                </div>
                
                <div className="MovieCard">
                    <MovieCard 
                    posterPath={PulpFictionPoster}
                    title="Pulp Fiction"
                    isWatched={true}/>
                </div>
                
                <div className="MovieCard">
                    <MovieCard 
                    posterPath={InglouriousBasterdsPoster}
                    title="Inglourious Basterds"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={DjangoUnchainedPoster}
                    title="Django Unchained"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={KillBillPoster}
                    title="Kill Bill"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={KillBill2Poster}
                    title="Kill Bill Vol.2"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={JackieBrownPoster}
                    title="Jackie Brown"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={DeathProofPoster}
                    title="Death Proof"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={ReservoirDogsPoster}
                    title="Reservoir Dogs"
                    isWatched={true}/>
                </div>

                <div className="MovieCard">
                    <MovieCard 
                    posterPath={TheHateFulEightPoster}
                    title="The Hateful Eight"
                    isWatched={false}/>
                </div>
            </div>
        </div>
    )
}