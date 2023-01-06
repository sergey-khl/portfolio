import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Me from './pages';
  
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Me />} />
            </Routes>
        </Router>
    );
}

export default App;
