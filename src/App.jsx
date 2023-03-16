import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Firstnovel from './pages/First/firstnovel';
import Footer from './pages/Footer/Footer';
import SecondNovel from './pages/Second/secondnovel';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/firstnovel" element={<Firstnovel />}></Route>
          <Route path="/secondnovel" element={<SecondNovel />}></Route>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
