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
            <GalleryCard imgsrc={aclu} title="ACLU" href="https://www.aclu.org/know-your-rights/stopped-by-police/" />
          </div>
          <div className="col-md-4"><GalleryCard imgsrc={jlusa} title="JustLeadership" href="https://jlusa.org/" /></div>
          <div className="col-md-4"><GalleryCard imgsrc={crj} title="Center for Racial Justice" href="https://centerracialjustice.org/" /></div>
        </div>
      </div>
    )
  }
}

export default Gallery;