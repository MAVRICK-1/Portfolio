import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishi Mondal </span>
            from <span className="purple"> West Bengal , India.</span>
            <br />
            I'm a Software Engineer and Web Developer, skilled in coding and design. With a
            foundation in robust software, I'm exploring the exciting realm of machine
            learning, blending creativity with algorithms.

            <br />
            I am currently pursuing  my BCA(Bachelor of Computer Application) from <span className="purple">Techno College Hooghly</span>.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> learning new things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
