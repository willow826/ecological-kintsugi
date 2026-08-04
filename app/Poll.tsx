"use client";

import { useState } from "react";

const pollOptions = [
  "The crack itself",
  "The plant or moss nearby",
  "The edge between pavement and wall",
  "The act of repair",
  "I am not sure yet",
];

export function Poll() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="poll-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (selected) {
          setSubmitted(true);
        }
      }}
    >
      {pollOptions.map((option) => (
        <label key={option} className={selected === option ? "selected" : ""}>
          <input
            checked={selected === option}
            name="noticed"
            onChange={() => {
              setSelected(option);
              setSubmitted(false);
            }}
            type="radio"
            value={option}
          />
          <span>{option}</span>
        </label>
      ))}
      <button disabled={!selected} type="submit">
        Mark what I noticed
      </button>
      {submitted ? (
        <p className="poll-thanks">
          Thank you. That shift of attention is exactly what the project is
          trying to trace.
        </p>
      ) : null}
    </form>
  );
}
