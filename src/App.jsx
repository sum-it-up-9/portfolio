import { useState } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Footer />
        {/* <Work />
        <Skills />
        <Testimonial />
        <Footer /> */}
      </div>
       
    </>
  )
}

export default App
