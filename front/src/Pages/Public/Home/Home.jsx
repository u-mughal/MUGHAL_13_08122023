import Features from "@/Components/Features/Features"
import Hero from "@/Components/Hero/Hero";
import datafeatures from "@/Assets/Api/Featuresinfo.json"

/**
 * Composant représentant la page d'accueil de l'application.
 * @component
 * @returns {JSX.Element} - Le composant Home.
 */
const Home = () => {
    return (
        <div>
            {/* Section héros de la page d'accueil */}
            <Hero />
            {/* Section des fonctionnalités avec une liste de composants Features */}
            <section className='features'>
            {
                datafeatures.map((value) =>
                <Features key={value.id} image={value.image} alt={value.alt} title={value.title} description={value.content} />
                )
            }
            </section>
        </div>
    );
};

export default Home;
