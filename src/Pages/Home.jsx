import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import './Home.css'; 

const Home = ({ artworks }) => {
  return (
    <div>
      <Header/>
      <div className="gallery-container">
        {artworks.map((artwork, index) => (
          <div className="gallery-item" key={index}>
            <Link to={`/content/${index}`}>
              <img src={artwork.images.thumbnail} alt={artwork.name} />
              <div className="gallery-info">
                <h3>{artwork.name}</h3>
                <p>{artwork.artist.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
