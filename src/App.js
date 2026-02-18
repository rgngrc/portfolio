import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SubmissionSuccess from './components/SubmissionSuccess';
import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SubmissionSuccess />} />
      </Routes>
    </>
  );
}

export default App;
