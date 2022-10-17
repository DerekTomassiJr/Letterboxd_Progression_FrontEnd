import TalentCard from "../components/TalentCard";
import "../stylesheets/Directors.css"

export default function Home() {
    return (
        <div id="DirectorPageContent">
            <h1 id="PageHeader">Directors Filmography</h1>
            <TalentCard />
        </div>
    )
}