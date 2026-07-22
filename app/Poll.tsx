"use client";

import { useState } from "react";

const pollOptions = [
  "The yellow trace",
  "The crack",
  "Moss / plants nearby",
  "The act of repair",
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
        Submit response
      </button>
      {submitted ? (
        <p className="poll-thanks">
          Thank you. Your noticing becomes part of how the project is read.
        </p>
      ) : null}
    </form>
  );
}
