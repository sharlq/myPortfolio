import Intro from './components/intro/intro'
import MyProjects from "./components/Myprojects/Myprojects"
import Nav from "./components/NavBar"
import MySkills from './components/MySkills/MySkills'
import AboutMe from './components/AboutMe/AboutMe'
function App() {
  return (
    <>
    <div className="app">
    <Nav />
    <Intro />
    <MyProjects />
    <MySkills />
    </div>
    <AboutMe />
    </>
  );
}

export default App;
