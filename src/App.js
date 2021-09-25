import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
    return (
      <>
        <Header/>
        <About 
          value="https://wallpapercrafter.com/desktop/232180-a-man-wearing-a-backward-hat-flannel-and-backpack-.jpg"
          value2="Hi"
          abt="Seeking a beginner role to enhance and explore my technical knowledge gained in all these years. I
               have done projects in IOT, Machine Learning. Web development and looking to pursue these
               technologies as my career."
        />
        <Skills/>
        <Projects/>
        <Footer/>
      </>
    );
}

export default App;