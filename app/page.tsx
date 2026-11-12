import SceneWrapper from "@/components/SceneWrapper";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Systems from "@/components/Systems";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Loader />
      <div className="grid-bg fixed inset-0 -z-20" aria-hidden />
      <SceneWrapper />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Systems />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-slate-900 py-8 text-center font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} Mharc Riosa · Built with Next.js, Three.js &amp;
        TailwindCSS
      </footer>
    </>
  );
}
