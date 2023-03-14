import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
