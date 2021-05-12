import Intro from './components/intro/intro'
import MyProjects from "./components/Myprojects/Myprojects"
import Nav from "./components/NavBar"
function App() {
  return (
    <div className="app">
    <Nav />
    <Intro />
    <MyProjects />
    </div>
  );
}

export default App;
