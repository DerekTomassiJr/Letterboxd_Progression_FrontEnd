import PropTypes from 'prop-types'
import "../stylesheets/MovieCard.css"
import greenCheck from "../images/green_check.png"
import redX from "../images/red_x.png"

const getStatusText = (isWatched) => {
    if (isWatched)
        return "Watched";
    else
        return "Not Watched";
}

const MovieCard = ({ posterPath, title, isWatched }) => {
    return (
        <div className="MovieCardHolder">
            <img src={posterPath} alt="Movie Poster" className="MovieCardImage"></img>
            <p className="MovieCardTitle">{title}</p>
            <p className="MovieCardStatusText"
            style={{color: isWatched ? "#14FF00" : "#FF0000"}}>
            {getStatusText(isWatched)}</p>
            <img src={isWatched ? greenCheck : redX} alt="Status" className="MovieCardStatusImage"></img>
        </div>
    )
}

MovieCard.defaultProps = {
    title: "Null",
}

MovieCard.propTypes = {
    posterPath: PropTypes.string,
    title: PropTypes.string,
    isWatched: PropTypes.bool.isRequired,
}

export default MovieCard