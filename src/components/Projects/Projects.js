import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import photoeditor from "../../Assets/Projects/photo-editing.png";
import algosimulator from "../../Assets/Projects/algo-simulator.png";
import fitheal from "../../Assets/Projects/fitheal.png";
import googleclone from "../../Assets/Projects/google-clone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleclone}
              isBlog={false}
              title="GOOGLE-clone"
              description="The Google Clone project in ReactJS is an excellent example of how to use ReactJS and Google APIs to create a functional and responsive search engine. ReactJS is a popular JavaScript library that enables developers to build user interfaces using a component-based approach. Google APIs, on the other hand, provide a range of services such as search, maps, and authentication that developers can integrate into their applications."
              ghLink="https://github.com/jatinkumar469/Google-clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algosimulator}
              isBlog={false}
              title="ALGO-simulator"
              description="Algorithm Simulator is a powerful tool that allows developers and computer science students to visualize and better understand various sorting algorithms such as insertion sort, bubble sort, merge sort, selection sort, and quick sort. This tool provides a simulation environment where users can experiment with different input sizes and see how each algorithm performs under different conditions."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoeditor}
              isBlog={false}
              title="Photo-Editor"
              description="The photoeditor website is an online tool that enables users to edit their photos easily. It offers a range of features, including upload, save, flip, rotate, and resize functionalities. The upload feature allows users to upload their photos from their local devices to the website for editing, while the save feature allows them to save their edited photos back to their devices. "
              ghLink="https://github.com/jatinkumar469/Photo-editor"
              demoLink=" https://jatinkumar469.github.io/Photo-editor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitheal}
              isBlog={false}
              title="FITHEAL website"
              description="Fitheal is a website designed using HTML, and CSS that aims to
              promote health , website has a clean and modern design, with a simple navigation menu that allows users to easily access the
              different sections of the site."
              ghLink="https://github.com/jatinkumar469/Fitheal"
              demoLink="https://kaleidoscopic-kataifi-501549.netlify.app/#food-menu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
