
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Tarifs from '@/components/Tarifs';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Index = () => {
  useScrollToTop();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Services />
          {/* <Tarifs/> */}
          <Projects />
          <Team />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
