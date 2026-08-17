import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ParticleCanvas from './components/ParticleCanvas';
import CursorGlow from './components/CursorGlow';
import { useTheme } from './hooks/useTheme';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const { theme } = useTheme();

  const handleShowToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary-hover relative overflow-x-hidden">
      
      {/* Interactive Constellation Star Canvas */}
      <ParticleCanvas />

      {/* Dynamic Cursor Spotlight Torch Glow */}
      <CursorGlow />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onShowToast={handleShowToast} />
      </main>

      <Footer />

      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
}

export default App;
