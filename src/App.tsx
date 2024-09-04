import './App.css'
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre'
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Eda from './pages/Eda/Eda';
import Obi from './pages/Obi/Obi';
import Intro from './pages/Intro/Intro';
import MarkdownNavigator from './components/renderArticlePage/RenderArticlePage';

function App() {
  return (
      <Router>
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
