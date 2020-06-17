import React, { Component } from "react";
import GalleryCard from "./GalleryCard";

// Image Imports
import aclu from "./assets/aclu-logo.jpeg";
import jlusa from "./assets/jlusa-logo.jpeg";
import crj from "./assets/crj-logo.png";
import ccrb from "./assets/ccrb.png";
import vera from "./assets/vera.png";
import blm from "./assets/blm.png";

class Gallery extends Component {
  render() {
    const description = {
      aclu:
        "Being stopped by police is a stressful experience that can go bad quickly. Here we describe what the law requires and also offer strategies for handling police encounters. We want to be clear: The burden of de-escalation does not fall on private citizens — it falls on police officers.",
      jlusa:
        "Mass incarceration is the most significant domestic threat to the fabric of our democracy. The reason for such high incarceration rates is not serious crimes but misguided policies such as mandatory minimums, three-strikes laws and reductions in the availability of parole and other early release mechanisms.",
      crj:
        "In 2010, the mission and direction of Border Crossers shifted to training educators to disrupt and dismantle racism in their classrooms, communities, and homes. We are now the Center for Racial Justice in Education, wherein dismantling racism, we are transforming communities",
      mh:
        "This website contains resources to therapists and hotlines for black african americans struggling with mental health. during this uncertain and challanging time in our black community.",
      ccrb:
        "If you wish to file a complaint regarding excessive force, abuse of authority, discourtesy or offensive language (FADO) against a member of the New York City Police Department (NYPD) through our web site, complete the form below.",
      vera:
        "The ICH program educates non-detained immigrants in removal (deportation) proceedings about the court process. The goal of ICH is to help individuals make informed decisions about their legal cases and improve the efficiency and effectiveness of immigration court proceedings.",
      blm:
        "Join the Movement to fight for Freedom, Liberation and Justice by signing up for updates, supporting our work, checking out our resources, following us on social media, or wearing our dope, official gear.",
    };

    return (
      <div className="gallery">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <GalleryCard
                imgsrc={aclu}
                title="ACLU"
                href="https://www.aclu.org/know-your-rights/stopped-by-police/"
                desc={description.aclu}
              />
            </div>
            <div className="col-md-4">
              <GalleryCard
                imgsrc={jlusa}
                title="JustLeadership"
                href="https://jlusa.org/"
                desc={description.jlusa}
              />
            </div>
            <div className="col-md-4">
              <GalleryCard
                imgsrc={crj}
                title="Center for Racial Justice"
                href="https://centerracialjustice.org/"
                desc={description.crj}
              />
            </div>

            <div className="col-md-4 bottomcard">
              <GalleryCard
                imgsrc={ccrb}
                title="File a Police Misconduct"
                href="https://www1.nyc.gov/site/ccrb/complaints/file-online.page"
                desc={description.ccrb}
              />
            </div>

            <div className="col-md-4 bottomcard">
              <GalleryCard
                imgsrc={vera}
                title="Immigration Court Helpdesk"
                href="https://www.vera.org/projects/immigration-court-helpdesk/immigration-court-helpdesk-ich-courts"
                desc={description.vera}
              />
            </div>

            <div className="col-md-4 bottomcard">
              <GalleryCard
                imgsrc={blm}
                title="Black Lives Matter"
                href="https://blacklivesmatter.com/"
                desc={description.blm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
