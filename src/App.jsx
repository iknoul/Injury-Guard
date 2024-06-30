import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PredictInjury from './pages/PredictInjury';
import SportsInjuries from './pages/SportsInjuries';
import {useState} from 'react'
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] =useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/home" element={isAuthenticated ? <Home setIsAuthenticated={setIsAuthenticated}/> : < Login setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/predictInjury" element={isAuthenticated ? <PredictInjury setIsAuthenticated={setIsAuthenticated}/> : < Login setIsAuthenticated={setIsAuthenticated}/>}/>            
          <Route path="/sportsInjuries" element={isAuthenticated ? <SportsInjuries setIsAuthenticated={setIsAuthenticated}/> : < Login setIsAuthenticated={setIsAuthenticated}/>}/>            
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
