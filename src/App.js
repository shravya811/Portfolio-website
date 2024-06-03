import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"lavender"
    }}>
      <Home />
      <AboutMe/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>  
  );
}

export default App;
