import Navbar from "@/components/Navbar";
import TypeScaleGenerator from "@/components/TypeScaleGenerator";
import Footer from "@/components/Footer";
import GridPattern from "@/components/GridPattern";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Background */}
      {/* Background */}
      <GridPattern />

      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen pt-24">


        <section className="flex-grow flex items-center justify-center py-6 md:py-10">
          <TypeScaleGenerator />
        </section>

        <Footer />
      </div>
    </main>
  );
}
