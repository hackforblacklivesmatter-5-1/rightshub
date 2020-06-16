import React from "react";
import RightsCard from "./Gallery/RightsCard";

const description = {
  silent:
    "You have the right to remain silent. For example, you do not have to answer any questions about where you are going, where you are traveling from, what you are doing, or where you live. If you wish to exercise your right to remain silent, say so out loud. (In some states, you may be required to provide your name if asked to identify yourself, and an officer may arrest you for refusing to do so.",
  search:
    "You do not have to consent to a search of yourself or your belongings, but police may pat down your clothing if they suspect a weapon. Note that refusing consent may not stop the officer from carrying out the search against your will, but making a timely objection before or during the search can help preserve your rights in any later legal proceeding.",
  lawyer:
    "If you are arrested by police, you have the right to a government-appointed lawyer if you cannot afford one. You do not have to answer questions about where you were born, whether you are a U.S. citizen, or how you entered the country. (Separate rules apply at international borders and airports as well as for individuals on certain nonimmigrant visas, including tourists and business travelers.",
};

export const Rights = () => {
  return (
    <div className="Rights">
      <h1 className="rights-title">Know Your Rights</h1>
      <div className="red-line-title"></div>
      <h5 className="rights-subheader">
        All US citizens are guaranteed certain rights.<p></p> The{" "}
        <a
          className="ACLU-link"
          target="_blank"
          href="https://www.aclu.org/know-your-rights/stopped-by-police/"
        >
          ACLU
        </a>
        {""} has provided tips to protect yourself when encountering the police.
      </h5>
      <div className="Rights-Gallery">
        <div className="container-fluid d-flex justify-content-center">
          <div
            style={{
              paddingTop: `2rem`,
            }}
            className="row rights"
          >
            <div className="col-md-4">
              <RightsCard
                // imgsrc={aclu}
                emoji="🤐"
                title="To Remain Silent"
                href="https://www.aclu.org/know-your-rights/stopped-by-police/"
                desc={description.silent}
              />
            </div>
            <div className="col-md-4">
              <RightsCard
                // imgsrc={jlusa}
                emoji="🚫"
                title="To Deny Search"
                href="https://jlusa.org/"
                desc={description.search}
              />
            </div>
            <div className="col-md-4">
              <RightsCard
                // imgsrc={crj}
                emoji="👩🏾‍💼"
                title="To a Lawyer"
                href="https://centerracialjustice.org/"
                desc={description.lawyer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
