import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Assistant" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;