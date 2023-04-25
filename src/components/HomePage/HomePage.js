import Hero from "components/Hero/Hero"
import FeaturesList from "components/FeaturesList/FeaturesList"
import TweetsExamples from "components/TweetsExamples/TweetsExamples"
import PostsList from "components/PostsList/PostsList"

export default function HomePage() {
    return (
        <div className="page">
            <Hero />
            <FeaturesList />
            <PostsList />
            <TweetsExamples />
        </div>
    )
}