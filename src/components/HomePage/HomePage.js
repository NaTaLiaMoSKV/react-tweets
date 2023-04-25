// import { NavLink } from "react-router-dom"
import { Link } from "./Link.styled"

export default function HomePage() {
    return (
        <div className="page">
            <Link to="/tweets">to tweets</Link>
        </div>
    )
}