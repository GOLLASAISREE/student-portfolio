import React from 'react';
import { Box } from '@mui/material';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Achievements from '../sections/Achievements';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Home;