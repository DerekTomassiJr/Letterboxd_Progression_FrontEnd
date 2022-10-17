import "../stylesheets/TalentCard.css";
import TarantinoPic from "../images/tarantino_headshot.png";
import ExpandIcon from "../images/expand_icon.png";

export default function Navbar() {
    return ( 
        <div class="TalentContentHolder">
            <img src={ TarantinoPic } alt="Tarantino Pic" class="TalentCardPicture"></img>
            <h2 class="TalentCardHeader">Quentin Tarantino</h2>
            <div class="ProgressBarBackground"></div>
            <div class="ProgressBar"></div>
            <p class="CompletionRate">9/10</p>
            <img src={ ExpandIcon } alt="Expand Icon" class="TalentCardExpandIcon"></img>
        </div>
    )
}