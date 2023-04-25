import css from './TweetsExamples.module.css'

export default function TweetsExamples() {
    return (
        <div className={css.examples__container}>
            <h2 className={css.examples__title}>Always with you</h2>
            <div className={css.examples__items}>
                <div className={css.examples__item}>
                    <img className={css.examples__image} src={require('../../images/example2.jpg')}></img>
                    <img className={css.examples__image} src={require('../../images/example1.jpg')}></img>
                    <img className={css.examples__image} src={require('../../images/example3.jpg')}></img>
                </div>
            </div>
        </div>
        
    )
}