import css from './PostList.module.css'
export default function PostsList() {
    return (
        <div className={css.posts}>
            <h2 className={css.posts__title}>What tweets will you see?</h2>
            <ol className={css.posts__list}>
                <li className={css.posts__item}>Customer Testimonials</li>
                <li className={css.posts__item}>Product Teasers</li>
                <li className={css.posts__item}>Multi-Image Posts</li>
                <li className={css.posts__item}>Humor</li>
                <li className={css.posts__item}>Twitter Polls</li>
                <li className={css.posts__item}>Industry News</li>
                <li className={css.posts__item}>New Content from Other Channels</li>
            </ol>
        </div>
    )
}