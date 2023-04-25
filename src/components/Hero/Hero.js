import css from './Hero.module.css'
import { Link } from "./Link.styled"
export default function Hero() {
    return (
        <div className={css.hero__container}>
            <div className={css.hero__description}>
                <h1 className={css.hero__title}>Follow users and watch their tweets!</h1>
                <h2 className={css.hero__subtitle}>Just press "FOLLOW" and see user's tweets anytime!</h2>
                <Link to="/tweets">to tweets</Link>
            </div>
            <div>
                <img className={css.hero__image} alt='tweet message' src={require(`../../images/tweet-image.png`)}></img>
            </div>
            
        </div>
    )
}