 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/logIn';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Errror from './components/Errror';
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/details' element={<Details />} />
          <Route path='*' element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;
