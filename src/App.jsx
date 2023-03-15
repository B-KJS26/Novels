import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Firstnovel from './pages/First/firstnovel';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/firstnovel" element={<Firstnovel />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
