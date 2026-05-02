import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Academic & Project <span>&</span>
          <br />Milestones
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>APJ Abdul Kalam Technological University (KTU)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Focusing on Data Structures, Database Management, and Advanced
              Software Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Project Development</h4>
                <h5>Independent Developer</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Independent developer focusing on community-driven healthcare
              and logistics solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Research & Implementation</h4>
                <h5>Self-Directed Research</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Exploring local LLM deployment and hardware optimization for
              AI models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
