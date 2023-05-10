import React from "react";
import "./EventForm.css";
import { useState } from "react";

const EventForm = ({ addData }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  console.log(title, date);

  function resetForm() {
    setTitle("");
    setDate("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
    };
    addData(formData);
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <strong>Event Title : </strong>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </label>
      <label>
        <strong>Event Date : </strong>
        <input
          type="date"
          onChange={(event) => setDate(event.target.value)}
          value={date}
        />
      </label>
      <button type="submit">제출하기</button>
      <button type="reset" onClick={resetForm}>
        초기화
      </button>
    </form>
  );
};

export default EventForm;
