import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
    return (
        <div>
           <NavBar />
            <main>
                <Hero />
                <Features />
                
            </main>
            <Footer />
        </div>
    );
}