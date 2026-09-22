import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Services />
        <Experience />
        <Contact />
        <footer className="footer">
          <p>© {new Date().getFullYear()} João Victor Azevedo de Sena</p>
          <a href="#inicio">Voltar ao topo</a>
        </footer>
      </main>
    </>
  );
}
