import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Hello!</h1>

      <span>
        I am <b>Shreya Agrawal.</b>
      </span>
      <img
        src="https://cdn.pixabay.com/photo/2015/09/09/06/57/child-931152_640.jpg"
        alt="My photo"
        height="150"
      />
      <hr />

      <p>
        This is my <i>first</i> portfolio project.
      </p>
      <hr />
      <p1>Here are links to my index pages:</p1>
      <br />
      <div>
        <a href="#AboutMe">About Me</a>
        <br />
        <a href="#Education">Education</a>
        <br />
        <a href="#Projects">Projects</a>
        <br />
        <a href="#Skills">Skills</a>
        <br />
        <a href="#Contact">Contact Me</a>
      </div>
    </div>
  );
}
