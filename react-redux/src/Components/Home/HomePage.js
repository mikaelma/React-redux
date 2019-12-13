import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Header</h1>
      <p>Paragraph</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
}
