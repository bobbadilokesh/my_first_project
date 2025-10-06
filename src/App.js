import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Register from './components/Register';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cards" element={<Card />}></Route>
        </Routes>
        {/* <Footer /> */}

        {/* <Education />
        <Register />
        <Card /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
