import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const pathName = location.pathname;

  const isContentWithId = pathName.startsWith('/content/') && pathName.split('/').length === 3;

  if (!isContentWithId) {
    return null; 
  }

  return (
    <div className="footer">
        <div style={{width:'100%', height:'3px', background:'gray', marginTop:'100px' }}></div>
        <h1 style={{fontSize:'40px'}}>Starry Night</h1>
        <h1 style={{fontSize:'26px', color: 'gray' }}>vincet van gogh</h1>
    </div>
  );
}
