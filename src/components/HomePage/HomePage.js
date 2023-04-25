import Hero from "components/Hero/Hero"
import FeaturesList from "components/FeaturesList/FeaturesList"

export default function HomePage() {
    return (
        <div className="page">
            <Hero />
            <FeaturesList />
        </div>
    )
}