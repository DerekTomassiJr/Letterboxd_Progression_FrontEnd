import { Link, useMatch, useResolvedPath } from "react-router-dom";
import letterboxdLogo from "C:/Users/derek/Documents/Code/Web Devlopement/My Work/Letterboxd_Progression_Website/letterboxd-progression/src/images/letterboxd_logo.png";
import settingsIcon from "C:/Users/derek/Documents/Code/Web Devlopement/My Work/Letterboxd_Progression_Website/letterboxd-progression/src/images/settings_icon.png";
import profilePicture from "C:/Users/derek/Documents/Code/Web Devlopement/My Work/Letterboxd_Progression_Website/letterboxd-progression/src/images/profile_picture.JPG"

export default function Navbar() {
    const path = window.location.pathname;
    return ( 
    <nav className="nav">
        <Link to="/" className="site-title"><img id="site_logo" src={ letterboxdLogo } /></Link>
        <ul>
            <CustomLink to="/profile"><img id="profile_picture" src={ profilePicture } />Profile</CustomLink>
            <CustomLink to="/directors">Directors</CustomLink>
            <CustomLink to="/actors">Actors</CustomLink>
            <CustomLink to="/achievements">Achievements</CustomLink>
            <CustomLink to="/settings"><img id="settings_icon" src={ settingsIcon } /></CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {    
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}