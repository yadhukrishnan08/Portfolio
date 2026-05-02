import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>MedLink</h4>
                  <p>Healthcare / Community Support</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Node.js, MySQL</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="MedLink - Healthcare Support System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Fleet Scheduler</h4>
                  <p>Logistics / Public Transport</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Full-Stack Web Dev</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Fleet Scheduler - Transport Management" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Smart Parking System</h4>
                  <p>IoT / Utility</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Embedded Systems / Web Integration</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Smart Parking System - IoT Solution" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
