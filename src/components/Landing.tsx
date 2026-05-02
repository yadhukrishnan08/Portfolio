import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              YADHU
              <br />
              <span>KRISHNAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Computer Science</h3>
            <div className="landing-roles">
              <div className="landing-roles-track">
                <h2 className="landing-role">Student</h2>
                <h2 className="landing-role">Developer</h2>
                <h2 className="landing-role">AI Enthusiast</h2>
              </div>
            </div>
            <p className="landing-subtext">Crafting intelligent web solutions and exploring the future of local AI.</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
