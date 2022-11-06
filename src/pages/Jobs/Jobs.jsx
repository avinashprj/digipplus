import React, { useState } from "react";
import { GrAnnounce } from "react-icons/gr";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
const Jobs = () => {
  const [showButton, setshowButton] = useState(false);
  return (
    <>
      <main class="main-content">
        <div class="main-content-nav">
          <div>
            <h5 className="main-content-nav-heading">JOBS</h5>
            <h6 className="main-content-nav-sub">Solution Writing</h6>
          </div>
          <div>
            <h5 className="main-content-nav-heading">For job application</h5>
            <h6 className="main-content-nav-sub" class="dark">
              Screening tasks
            </h6>
          </div>
          <div>
            <h5 className="main-content-nav-heading">application status</h5>
            <h6 className="main-content-nav-sub">JOB APPLICATION STATUS</h6>
          </div>
        </div>
        <div className="main-content-cards">
          <div class="main-content-card">
            <h3 className="main-content-card-heading">
              K10 Maths Text Book Solution
            </h3>
            <p className="main-content-card-para">intern digipplus</p>
          </div>
        </div>
      </main>
      <div className={`main-content-announce ${showButton ? "animate" : ""}`}>
        <h3 className="main-content-heading">
          Announcements
          <span>
            <GrAnnounce className="icon" />
            <GrAnnounce className="icon" />
          </span>
        </h3>
        <p class="main-content-sub">
          We are working on adding Project and Intership Details , So just fill
          up profile only
        </p>
      </div>
      <button
        className="toggle-announce"
        onClick={() => setshowButton((prev) => !prev)}
      >
        <BiLeftArrow className={`toggle-arrow ${showButton ? "rotate" : ""}`} />
      </button>
    </>
  );
};

export default Jobs;
