import { useState, useCallback } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ChatBot } from "./components/ChatBot";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <LoadingScreen onComplete={handleComplete} />
      <div
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </div>
      <ChatBot />
    </div>
  );
}