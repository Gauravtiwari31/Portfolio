import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Electronics Engineering</h4>
                <h5>RGIPT, Amethi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Electronics Engineering with a strong parallel focus on
              software — full-stack development, algorithms, and systems
              programming. Co-Head of the IEEE Student Branch, planning and
              executing 3+ technical workshops reaching 150+ students.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Minor – Computer Science Engineering</h4>
                <h5>IIT Mandi</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Formal CS curriculum at IIT Mandi (Aug 2025 – May 2026) running
              alongside the B.Tech, covering algorithms, systems design, and
              software engineering fundamentals. Dual-track academic commitment
              across two institutions simultaneously.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Project Manager</h4>
                <h5>Neeyat AI</h5>
              </div>
              <h3>Mar '26</h3>
            </div>
            <p>
              Directed end-to-end SDLC for a cloud-native MCP server powering
              AI-assisted API performance testing. Coordinated 3 cross-functional
              teams, architected scalable microservices on cloud eliminating local
              test environments for 10+ engineers, and achieved a 40% gain in
              testing efficiency through sprint planning and KPI tracking.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Gameplay Programmer</h4>
                <h5>Aurelio Game Studio</h5>
              </div>
              <h3>Apr '26</h3>
            </div>
            <p>
              Engineered core gameplay systems including player mechanics,
              physics interactions, and real-time event handling in optimised C#,
              integrated CI/CD pipelines and Git-based version control. Reduced
              computational overhead by 30% by profiling hotspots, restructuring
              the game loop, and applying targeted algorithmic optimisations
              across 5+ gameplay modules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
