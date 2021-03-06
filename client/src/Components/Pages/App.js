import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import placeholder from "../../Images/rmartinez.jpg";
import TextMagic from "../TextMagic";
import Title from "../Titlte";

export default function Home() {
  return (
    <Row className="align-items-center app">
      <Title title="Home" />
      <Col md={12} lg={6}>
        <h1 className="mb-4 font-weight-bold text-lg-left">
          Rodrigo E. Martínez
        </h1>
        <p className="">
          I'm a web developer on
          <TextMagic text="ReactJS" />, <TextMagic text="ExpressJS" /> and <TextMagic text="Lumen" />, in constant study and integral growth in the laboral scene. <br /> I'm ready to work on groupal projects, where colaborative work and comunication are crucial.
        </p>

        {/* <blockquote>
          Si soy grande, es porque me apoyé en hombros fuertes.
        </blockquote> */}
      </Col>
      <Col md={12} lg={6}>
        <Image
          src={placeholder}
          className="rounded-circle d-block mx-auto mx-md-0 mx-lg-0"
          fluid
        />
      </Col>
    </Row>
  );
}
