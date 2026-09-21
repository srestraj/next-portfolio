import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedWork />
      <Experience />
      <Expertise />
      <About />
      <Contact />
    </main>
  );
}
