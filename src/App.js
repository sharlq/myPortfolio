import Intro from './components/intro/intro'
import MyProjects from "./components/Myprojects/Myprojects"
import Nav from "./components/NavBar"
import MySkills from './components/MySkills/MySkills'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <div className="app">
    <Nav />
    <Intro />
    <MyProjects />
    <MySkills />
    </div>
    <Footer />
    </>
  );
}

export default App;
