import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import causeway from "../../Assets/Projects/Causeway.png";
import CountryInfoWeb from "../../Assets/Projects/CountryInfoWeb.png";
import ondc from "../../Assets/Projects/ONDC.png";
import brainwave from "../../Assets/Projects/Brainwave.png";
import iyp from "../../Assets/Projects/IYP.png";
import generativeAi from "../../Assets/Projects/RishiAi.jpg";
import speechEmotion from "../../Assets/Projects/SpeechEmotion.png";
import deviceMonitoring from "../../Assets/Projects/DeviceMonitoring.png";


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
              imgPath={ondc}
              isBlog={false}
              title="ONDC Build for Bharat Hackathon Project "
              description="Our project, an ONDC (Open Network for Digital Commerce) site integrated with OpenStreetMap, aims to offer seamless digital commerce experiences for Bharat's businesses and consumers. Led by me as the project leader, it utilizes ONDC APIs for data integration and Firebase for backend management, complemented by React for frontend development."
              ghLink="https://github.com/SHANKARA-CODERS/NestONDC"
              demoLink="https://nestondc.el.r.appspot.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={generativeAi}
              isBlog={false}
              title="RishiAi - ChatBot CLI"
              description="RishiAi is a command-line interface (CLI) AI ChatBot that uses Google’s Gemini API to generate natural language response . You can chat with RishiAi about anything, from images to documents, and have fun and engaging conversations"
              ghLink="https://github.com/MAVRICK-1/Rishi-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speechEmotion}
              isBlog={false}
              title="Speech Emotion Recognition using NLP Audio & Text"
              description="Human-Computer interactions make it mandatory to get accurate communications, like both humans. If
computer identification means we will get clever interaction We might be on the verge of too many
screens. It seems like everyday, new versions of common objects are “re-invented” with built-in Wi-Fi
and bright touchscreens. A promising antidote to our screen addiction are voice interfaces"
              ghLink="https://github.com/MAVRICK-1/Rishi-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iyp}
              isBlog={false}
              title="IYP (Internet Yellow Pages) Python Library"
              description="The IYP Python library is a lightweight query tool designed to simplify interactions with Neo4j DBMS. By encapsulating common query operations and providing a user-friendly interface, the library streamlines the process of retrieving and analyzing data from Neo4j databases."
              ghLink="https://github.com/MAVRICK-1/IYP_Lib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deviceMonitoring}
              isBlog={false}
              title="Device Monitoring"
              description="This project demonstrates the integration of a Go-based web application with Prometheus and Grafana for monitoring and metrics visualization. The application simulates device management, providing endpoints to register devices, manage device firmware, and handle user logins."
              ghLink="https://github.com/MAVRICK-1/IYP_Lib"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainwave}
              isBlog={false}
              title="Brainwave"
              description="Brainwave is a modern UI/UX website developed using React.js and Tailwind CSS. It showcases contemporary design principles with its sleek layout, seamless animations, and exceptional user experience. This project serves as a reference or inspiration for future modern applications or websites."
              ghLink="https://github.com/MAVRICK-1/Brainwave"
              demoLink="https://brainwave-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={causeway}
              isBlog={false}
              title="Code Bin"
              description="CodeBin is a web application built with Angular,
                Angular Material, NgRx, RxJS, and Firebase. It allows users to securely store and edit their code snippets in the cloud."
              ghLink="https://github.com/MAVRICK-1/causewaylogin"
              demoLink="https://causewaylogin.vercel.app/singup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CountryInfoWeb}
              isBlog={false}
              title="Country Info Web"
              description="CountryInfoWeb is a web project built with Vite and React, providing a comprehensive database of country
              information. Explore details such as population, currency, capital, bordering countries, region for countries
              worldwide"
              ghLink="https://github.com/MAVRICK-1/CountryInfoWeb"
              demoLink="https://mavrick-country-web.netlify.app/#/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
