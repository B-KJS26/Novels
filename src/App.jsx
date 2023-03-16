import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Firstnovel from './pages/First/firstnovel';
import Footer from './pages/Footer/Footer';
import SecondNovel from './pages/Second/secondnovel';
import styled from 'styled-components';
function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/firstnovel" element={<Firstnovel />}></Route>
          <Route path="/secondnovel" element={<SecondNovel />}></Route>
        </Routes>
        
      <Footer></Footer>
      </Router>
      </div>
  );
}

export default App;
