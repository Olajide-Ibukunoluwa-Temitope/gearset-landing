import React from "react";
import team from "../../../assets/images/team.png";
import "./styles.css";

const About: React.FC = () => {
  return (
    <div className="about_section">
      <div className="container">
        <div className="about_img">
          <img src={team} alt="team" width={580} height={400} />
        </div>
        <div className="about_text">
          <h2>About</h2>
          <p>
            We launched Gearset when we saw how lacklustre DevOps was preventing
            teams from taking full advantage of Salesforce. We&apos;d
            experienced first-hand how Salesforce allowed anyone to become a
            Trailblazer and build amazing apps, but then left you stranded, with
            only Change Sets or complex command lines to get your work to users.
            Gearset makes DevOps on Salesforce as simple as everything else on
            Salesforce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
