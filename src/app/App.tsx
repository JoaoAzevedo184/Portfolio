import { useState, useCallback } from "react";
import { theme } from "./config/theme";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { ChatBot } from "./components/ChatBot";
import { Hero, About, Stack, Projects, Contact } from "./sections";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{ backgroundColor: theme.colors.bg.primary, minHeight: "100vh" }}>
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
