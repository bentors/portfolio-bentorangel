import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundLights from "@/components/BackgroundLights";

export default function Home() {
  return (
    <main>
      <BackgroundLights />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}