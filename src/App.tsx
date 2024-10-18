import './App.css'
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre'
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Eda from './pages/eda/Eda';
import Obi from './pages/obi/Obi';
import Intro from './pages/intro/Intro';
import MarkdownNavigator from './components/renderArticlePage/RenderArticlePage';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/sobre" element={<Sobre />} /> 
            <Route path="/estude/eda" element={<Eda />} /> 
            <Route path="/estude/obi" element={<Obi />} /> 
            <Route path="/estude/intro" element={<Intro />} /> 
            <Route path="/estude/:category/:title/:fileName" element={<MarkdownNavigator />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
