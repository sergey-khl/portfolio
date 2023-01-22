import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Me from './pages/index';
import Quack from './pages/quacksite';

  
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Me />} />
                <Route path='/stick-game' element={<Me />} />
                <Route path='/quacksite' element={<Quack />} />
            </Routes>
        </Router>
    );
}

export default App;
