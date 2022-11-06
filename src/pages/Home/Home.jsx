import React from "react";
import Ds from "../../assets/DS.png";
import { GrAnnounce } from "react-icons/gr";
const Home = () => {
  return (
    <main class="hero">
      <div class="flex-center">
        <img class="hero-image" src={Ds} alt="" />
      </div>
      <h2 className="hero-heading">Welcome To Digipplus</h2>
      <h3 class="hero-sec">
        Announcements
        <span>
          <GrAnnounce className="icon" />
        </span>
      </h3>
      <div class="hero_info">
        <p>
          We are working on adding Project and Internship Details , So just fill
          up profile only
        </p>
      </div>
      <h4 className="hero-sec-heading">Work Action</h4>
      <p class="box">View Intern Data</p>
      <h4 className="hero-sec-heading">Internship</h4>
      <div class="hero-card">
        <h3 class="hero-card-title">Solution Writing</h3>
        <textarea
          class="hero-card-text"
          placeholder="Write Solution"
        ></textarea>
      </div>
    </main>
  );
};

export default Home;
