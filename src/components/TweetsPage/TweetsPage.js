import { NavLink } from "react-router-dom"
import TweetCard from "../TweetCard/TweetCard";
import LoadMore from "components/LoadMore/LoadMore";

export default function TweetsPage() {
    return (
        <div>
            <NavLink to="/">back</NavLink>
            <TweetCard />
            <LoadMore />
        </div>
    )
}