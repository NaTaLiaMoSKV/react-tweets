import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import { selectFilter, selectUsersList } from "../../redux/users/selectors";
import { selectFollowList } from "redux/actions/slice";

import { fetchUsersByFilter } from "../../redux/users/operations";
import { followUser, unfollowUser } from "redux/actions/slice";

import css from './TweetsList.module.css'

export default function TweetsList() {
    const dispatch = useDispatch();
    const usersList = useSelector(selectUsersList);
    const filter = useSelector(selectFilter);

    const followList = useSelector(selectFollowList);

    useEffect(() => {
        dispatch(fetchUsersByFilter(filter));
    }, [dispatch, filter])
    
    const formatNumber = number => {
        if (number > 1000) {
            const numStr = number.toString();
            const lastThreeDigits = numStr.substring(numStr.length - 3);
            const firstDigits = numStr.substring(0, numStr.length - 3);
            return `${firstDigits},${lastThreeDigits}`;
        } else {
            return number;
        }
    }

    const isUserFollowing = user => {
        const res = followList.find(item => item.id === user.id);
        return res;
    }

    return (
        <div className={css.tweets}>
            {filter === "follow" &&  
                usersList.filter(user => isUserFollowing(user) === undefined)
                .map(user => (
                    <li key={user.id} className={css.tweet}>
                        <img className={css.tweet__logo} alt='GoIT' src={require(`../../images/goit-logo.png`)}></img>
                        <img className={css.tweet__contentImage} alt='tweet message' src={require(`../../images/tweet-image.png`)}></img>
                        <div className={css.rect}></div>
                        
                        <div className={css.eclipse}>
                            <div className={css.eclipseBg}>
                                <img className={css.tweet__userImage} src={require(`../../images/${user.avatar}`)} alt={user.name}></img>
                            </div>
                        </div>
                        <div className={css.tweet__data}>
                            <p className={css.tweet__text}>{user.tweets} tweets</p>
                            <p className={css.tweet__text}> { formatNumber(user.followers) } followers</p>
                            <button className={css.tweet__button} onClick={() => dispatch(followUser(user))}>Follow</button>
                        </div>
                    </li>
                ))
            }
            {filter === "followings" && usersList.filter(user => isUserFollowing(user) !== undefined).length === 0 && <h3 className="loading">Your following list is empty</h3>}
            {filter === "followings" &&  
                usersList.filter(user => isUserFollowing(user) !== undefined)
                .map(user => (
                    <li key={user.id} className={css.tweet}>
                        <img className={css.tweet__logo} alt='GoIT' src={require(`../../images/goit-logo.png`)}></img>
                        <img className={css.tweet__contentImage} alt='tweet message' src={require(`../../images/tweet-image.png`)}></img>
                        <div className={css.rect}></div>
                        
                        <div className={css.eclipse}>
                            <div className={css.eclipseBg}>
                                <img className={css.tweet__userImage} src={require(`../../images/${user.avatar}`)} alt={user.name}></img>
                            </div>
                        </div>
                        <div className={css.tweet__data}>
                            <p className={css.tweet__text}>{user.tweets} tweets</p>
                            <p className={css.tweet__text}> { formatNumber(user.followers + 1) } followers</p>
                            <button className={css.tweet__activeButton} onClick={() => dispatch(unfollowUser(user))}>Following</button>
                        </div>
                    </li>
                ))
            }
            {filter === "all" &&  
                usersList.map(user => (
                    <li key={user.id} className={css.tweet}>
                        <img className={css.tweet__logo} alt='GoIT' src={require(`../../images/goit-logo.png`)}></img>
                        <img className={css.tweet__contentImage} alt='tweet message' src={require(`../../images/tweet-image.png`)}></img>
                        <div className={css.rect}></div>
                        
                        <div className={css.eclipse}>
                            <div className={css.eclipseBg}>
                                <img className={css.tweet__userImage} src={require(`../../images/${user.avatar}`)} alt={user.name}></img>
                            </div>
                        </div>
                        {isUserFollowing(user) ? (
                            <div className={css.tweet__data}>
                                <p className={css.tweet__text}>{user.tweets} tweets</p>
                                <p className={css.tweet__text}> { formatNumber(user.followers + 1) } followers</p>
                                <button className={css.tweet__activeButton} onClick={() => dispatch(unfollowUser(user))}>Following</button>
                            </div>
                            ) : (
                                <div className={css.tweet__data}>
                                <p className={css.tweet__text}>{user.tweets} tweets</p>
                                <p className={css.tweet__text}> { formatNumber(user.followers) } followers</p>
                                <button className={css.tweet__button} onClick={() => dispatch(followUser(user))}>Follow</button>
                            </div>
                            )
                        }
                    </li>
                ))
            }
        </div>
    )

}