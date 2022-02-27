import html from "../../Images/html.png";
import css from "../../Images/css.jpg";
import sass from "../../Images/sass.jpg";
import node from "../../Images/node.svg";
import react from "../../Images/react.png";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.png";
import nextjs from "../../Images/nextjs.png";
import graphql from "../../Images/graphql.png";
import lumen from "../../Images/lumen.png";
import Skill from "../Skill";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Titlte";

export default function Skills() {
  return (
    <>
      <Title title="Skills" />
      <h1 className="mt-5 mb-4 font-weight-bold">Skills</h1>
      <Row className="align-items-center">
        <Col lg={4}>
          <Skill
            title="React"
            image={react}
            desc="Lubrary for building user interfaces that can be used in the development of SPA, interactive and dynamically."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Next JS"
            image={nextjs}
            desc="React framework for building web applications with server-side rendering and static pages."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Node"
            image={node}
            desc="A cross-platform JavaScript runtime environment, focused to create diferent kinds of applications."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Express"
            image={express}
            desc="Framerowk for building backen applications and APIs with Node JS"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="MongoDB"
            image={mongodb}
            desc="Cross-platform document-oriented database to store information as documents/BJSON files."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="GraphQL"
            image={graphql}
            desc="Data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Lumen"
            image={lumen}
            desc="PHP's micro-framework for building web applications, APIs and microservices."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="SASS"
            image={sass}
            desc="Preposcessor scripting language for developing CSS more easy, flexible and in a programmatic way."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="CSS"
            image={css}
            desc="Style sheet language used to describe how HTML documents shoruld be displayed, adding styles. It is complemtary with SASS."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="HTML"
            image={html}
            desc="Markup language for building the basic structure of web pages in colaboration with CSS and JavaScript"
          />
        </Col>
      </Row>
    </>
  );
}
