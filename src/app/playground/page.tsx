import Navbar from "@/components/Navbar";
import PlaygroundContainer from "../../components/playground/PlaygroundContainer";
import Footer from "@/components/Footer";
import GridPattern from "@/components/GridPattern";

export default function PlaygroundPage() {
    return (
        <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-white/20 selection:text-white">
            {/* Background */}
            <GridPattern />

            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen pt-24">
                <section className="flex-grow flex items-center justify-center py-6 md:py-10">
                    <PlaygroundContainer />
                </section>

                <Footer />
            </div>
        </main>
    );
}
