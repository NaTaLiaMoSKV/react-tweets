import { Link } from "./Link.styled";
import TweetsList from "components/TweetsList/TweetsList";
import LoadMore from "components/LoadMore/LoadMore";
import DropdownList from "components/Dropdown/Dropdown";

export default function TweetsPage() {
    return (
        <div className="page">
            <Link to="/" style={{ marginLeft: 20 }}>back</Link>
            <DropdownList />
            <TweetsList />
            <LoadMore />
        </div>
    )
}