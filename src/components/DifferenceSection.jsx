import React from "react";
import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";
export default function DifferenceSection() {
  const [contentType, setContentType] = useState(null);
  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>What makes us different</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Way
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Easy
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Home
      </Button>
      {!contentType && <p>Press the button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
