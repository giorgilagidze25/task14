import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import './Content.css';
import Header from '../component/Header';

const Content = ({ artworks }) => {
  const { id } = useParams();
  const artwork = artworks[id];
  
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate(); 
  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => setOverlayOpen(false);
  const back = () => {
    navigate('/');  
  };

  return (
    <div>
     <Header/>
        <div className="box">
  

        <button className="backButton" onClick={back}>
        back
      </button>

      <div className="TextBox">
    
        <h1 className="title">{artwork.name}</h1>
        <h1 className="titleName">{artwork.artist.name}</h1>
      </div>
        <p className="description">{artwork.description}</p>
      <a className='wikepediaLink' href={artwork.source}>GO TO SOURCE</a>
      <img
        className="thumbnailImage"
        src={
          artwork.images.thumbnail.startsWith('.')
            ? artwork.images.thumbnail.slice(1)
            : artwork.images.thumbnail
          }
          alt={artwork.name}
          onClick={openOverlay} 
      />
      <img
      className='portret'
        src={
          artwork.artist.image.startsWith('.')
          ? artwork.artist.image.slice(1)
          : artwork.artist.image
        }
        alt={artwork.name}
        />
      {isOverlayOpen && (
        <div className="imageOverlay">
          <img
            className="fullImage"
            src={
              artwork.images.thumbnail.startsWith('.')
              ? artwork.images.thumbnail.slice(1)
                : artwork.images.thumbnail
            }
            alt={artwork.name}
            />
          <button className="closeButton" onClick={closeOverlay}>
            Close
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Content;
