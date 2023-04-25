import css from './FeaturesList.module.css'

export default function FeaturesList() {
    return (
        <div className={css.features}>
            <h2 className={css.features__title}>Features</h2>
            <ul className={css.features__list}>
                <li className={css.features__item}>
                    <img className={css.features__image} alt="icon create post" src={require('../../images/icon-create-post.png')}></img>
                    <h3 className={css.features__text}>Create new posts</h3>
                </li>
                <li className={css.features__item}>
                    <img className={css.features__image} alt="icon messages" src={require('../../images/icon-messages.png')}></img>
                    <h3 className={css.features__text}>Chat with friends</h3>
                </li>
                <li className={css.features__item}>
                    <img className={css.features__image} alt="icon like" src={require('../../images/icon-like.png')}></img>
                    <h3 className={css.features__text}>Like posts</h3>
                </li>
                <li className={css.features__item}>
                    <img className={css.features__image} alt="icon new notification" src={require('../../images/icon-new-notification.png')}></img>
                    <h3 className={css.features__text}>Get notified about new posts</h3>
                </li>
            </ul>
        </div>
    )
}