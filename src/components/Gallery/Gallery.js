import React, { Component } from 'react';
import GalleryCard from './GalleryCard';

// Image Imports
import aclu from './assets/aclu-logo.jpeg';
import jlusa from './assets/jlusa-logo.jpeg';
import crj from './assets/crj-logo.png'

class Gallery extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <GalleryCard imgsrc={aclu} />
          </div>
          <div className="col-md-4"><GalleryCard imgsrc={jlusa} /></div>
          <div className="col-md-4"><GalleryCard imgsrc={crj} /></div>
        </div>
      </div>
    )
  }
}

export default Gallery;