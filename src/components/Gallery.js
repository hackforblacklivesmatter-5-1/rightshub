import React, { Component } from 'react';
import GalleryCard from './GalleryCard';

class Gallery extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <GalleryCard />
          </div>
          <div className="col-md-4"><GalleryCard /></div>
          <div className="col-md-4"><GalleryCard /></div>
        </div>
      </div>
    )
  }
}

export default Gallery;