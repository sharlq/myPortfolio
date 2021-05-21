import React, { Suspense  } from 'react';
import Intro from './components/intro/intro'
//import MyProjects from "./components/Myprojects/Myprojects"
import Nav from "./components/NavBar"
import MySkills from './components/MySkills/MySkills'
import Footer from './components/Footer/Footer'


const MyProjects = React.lazy(() => import('./components/Myprojects/Myprojects'));

function App() {
  return (
    <>
    <div className="app">
    <div className="square">
    <Nav />
    <Intro />
    </div>
    <Suspense fallback={<div className="loading">Loading...</div>}>
    <MyProjects />
    </Suspense>
    <MySkills />
    </div>
    <Footer />
    </>
  );
}

export default App;
