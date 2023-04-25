import { Link } from './Link.styled'
import css from './Navigation.module.css'

export default function Navigation() {
    return (
        <>
            <nav>
                <img className={css.logo__image} alt='GoIT logo' src={require(`../../images/goit-logo2.png`)}></img>
                <Link to='/'>Home</Link>
                <Link to='/tweets'>Tweets</Link>
            </nav>
        </>
    )
}