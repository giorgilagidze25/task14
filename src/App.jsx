import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import data from './data.json'; 
import Home from './Pages/Home';
import Footer from './component/Footer'
import Content from './Pages/Content'

const App = () => {
  return (
     <div>
      <Routes>
        
        <Route path="/" element={<Home artworks={data} />} />
        <Route path="/content/:id" element={<Content artworks={data} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer artworks={data}/>
     </div> 
  );
};

export default App;
