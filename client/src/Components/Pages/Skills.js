import redux from "../../Images/redux.png";
import typescrypt from "../../Images/typescript.png";
import storybook from "../../Images/storybook.png";
import node from "../../Images/node.svg";
import react from "../../Images/react.png";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.png";
import nextjs from "../../Images/nextjs.png";
import jest from "../../Images/jest.png";
import graphql from "../../Images/graphql.png";
import styledComponents from "../../Images/styled-components.png";
import Skill from "../Skill";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Titlte";

export default function Skills() {
  return (
    <>
      <Title title="Tech Stack" />
      <h1 className="mt-5 mb-4 font-weight-bold">Tech Stack</h1>
      <Row className="align-items-center">
        <Col lg={4}>
          <Skill
            title="React"
            image={react}
            desc="Library for building user interfaces that can be used in the development of SPA, interactive and dynamically."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Redux"
            image={redux}
            desc="JavaScript library for managing and centralizing application state."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="TypeScript"
            image={typescrypt}
            desc="TypeScript is a strongly typed programming language that builds on JavaScript."
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
            title="Jest"
            image={jest}
            desc="Testing framework built on JavaScript, designed majorly to work with React."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Styled Components"
            image={styledComponents}
            desc="Library that allows you to write CSS in JS while building custom components in React JS."
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Storybook"
            image={storybook}
            desc="Frontend workshop for building UI components and pages in isolation."
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
            desc="Framework for building backend applications and APIs with Node JS"
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

      </Row>
    </>
  );
}
