import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "VitalSync",
    category: "Full-Stack / Healthcare",
    tools: "Next.js 14, TypeScript, PostgreSQL, Gemini AI, LiveKit",
    description:
      "Multi-role healthcare platform for patients, doctors, and hospitals. OPD queue management, appointment scheduling, WebRTC video via LiveKit, Razorpay payments, OAuth 2.0 + RBAC, deployed on Vercel with Neon PostgreSQL.",
    link: "https://github.com/Gauravtiwari31/VitalSync",
    image: "/screenshots/vitalsync.png",
  },
  {
    title: "AI-Powered Network Security Framework",
    category: "Cybersecurity / Machine Learning",
    tools: "Python, Scikit-learn, Deep Packet Inspection, Machine Learning",
    description:
      "3-layer hybrid pipeline combining ML models (Random Forest, Logistic Regression), rule-based filtering, and Deep Packet Inspection. Blocks SQL injection and 15+ categories of suspicious traffic.",
    link: "https://github.com/Gauravtiwari31/AI-Powered-Network-Security-Framework",
    image: "/screenshots/AI firewall project image.png",
  },
  {
    title: "Online Commerce Platform",
    category: "Full-Stack / MERN",
    tools: "React.js, Node.js, Express.js, MongoDB, Docker",
    description:
      "JWT auth with RBAC, content-based recommendation engine improving discoverability by 25%, Dockerised deployment, Swagger/OpenAPI documented RESTful endpoints.",
    link: "https://github.com/Gauravtiwari31/Online-Commerce_MERN-Stack",
    image: "/screenshots/onlineecommerce.png",
  },
];

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
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

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
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Stack</h4>
                <p>{project.tools}</p>
                <h4 style={{ marginTop: "0.5rem" }}>Overview</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
