import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import causeway from "../../Assets/Projects/Causeway.png";
import githubusers from "../../Assets/Projects/Githubusers.png";
import CountryInfoWeb from "../../Assets/Projects/CountryInfoWeb.png";
import ondc from "../../Assets/Projects/ONDC.png";
import brainwave from "../../Assets/Projects/Brainwave.png";
import iyp from "../../Assets/Projects/IYP.png";


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
              imgPath={iyp}
              isBlog={false}
              title="IYP (Internet Yellow Pages) Python Library"
              description="The IYP Python library is a lightweight query tool designed to simplify interactions with Neo4j DBMS. By encapsulating common query operations and providing a user-friendly interface, the library streamlines the process of retrieving and analyzing data from Neo4j databases."
              ghLink="https://github.com/MAVRICK-1/IYP_Lib"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubusers}
              isBlog={false}
              title="Github user Search"
              description="A basic and straightforward user interface has been developed utilizing Material UI, AngularJS, and RxJS for the purpose of searching GitHub users."
              ghLink="https://github.com/MAVRICK-1/Github-user-search"
              demoLink="https://github-user-search-one-delta.vercel.app/"
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
              title="Causeway login"
              description="This is the demo login and signup page using angular, firebase and angular material . It is connected to firebase .It
              contains pop-up for error handeling and also contains form validation."
              ghLink="https://github.com/MAVRICK-1/causewaylogin"
              demoLink="https://causewaylogin.vercel.app/singup"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
