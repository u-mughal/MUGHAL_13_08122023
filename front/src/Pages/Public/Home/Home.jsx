import Features from "@/Components/Features/Features"
import Hero from "@/Components/Hero/Hero";
import datafeatures from "@/Assets/Api/Featuresinfo.json"

const Home = () => {
    return (
        <div>
            <Hero />
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