import React, { Component } from 'react';
import GalleryCard from './GalleryCard';

// Image Imports
import aclu from './assets/aclu-logo.jpeg';
import jlusa from './assets/jlusa-logo.jpeg';
import crj from './assets/crj-logo.png'

class Gallery extends Component {

  // resource description strings


  render() {
    const description = {
      aclu: 'Being stopped by police is a stressful experience that can go bad quickly. Here we describe what the law requires and also offer strategies for handling police encounters. We want to be clear: The burden of de-escalation does not fall on private citizens — it falls on police officers. However, you cannot assume officers will behave in a way that protects your safety or that they will respect your rights even after you assert them.',
      jlusa: 'Mass incarceration is the most significant domestic threat to the fabric of our democracy. The reason for such high incarceration rates is not serious crimes but misguided policies such as mandatory minimums, three-strikes laws and reductions in the availability of parole and other early release mechanisms. Through targeted advocacy, strengthening leadership and membership support, JustLeadershipUSA believes a decarcerated America is possible.',
      crj: 'In 2010, the mission and direction of Border Crossers shifted to training educators to disrupt and dismantle racism in their classrooms, communities, and homes. We are now the Center for Racial Justice in Education, wherein dismantling racism, we are transforming communities—across New York City and nationwide.'
    };

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <GalleryCard imgsrc={aclu} title="ACLU: Know Your Rights" href="https://www.aclu.org/know-your-rights/stopped-by-police/" desc={description.aclu} />
          </div>
          <div className="col-md-4"><GalleryCard imgsrc={jlusa} title="JustLeadership" href="https://jlusa.org/" desc={description.jlusa} /></div>
          <div className="col-md-4"><GalleryCard imgsrc={crj} title="Center for Racial Justice" href="https://centerracialjustice.org/" desc={description.crj} /></div>
        </div>
      </div>
    )
  }
}

export default Gallery;