import React from "react";
import Img from "react-bootstrap/Image";

export default function Skill({ title, image, text, desc }) {
  return (
    <div className="p-2 mb-3 text-center">
      <Img
        src={image}
        className="rounded-lg"
        style={{ maxHeight: "100px" }}
        fluid
        loading="lazy"
      />
      <h4 className="mt-3">{title}</h4>
      <p style={{ fontSize: "15px" }}>{desc}</p>
    </div>
  );
}
