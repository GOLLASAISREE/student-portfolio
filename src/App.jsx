import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import theme from './theme';
import NavBar from './components/NavBar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <main>
          <Home />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}