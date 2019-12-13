import React, { useState } from "react";

const CoursePage = () => {
  const [course, setCourse] = useState("");

  function handleChange(event) {
    setCourse(event.target.value);
  }

  function handleSubmit() {
    alert(course);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add course</h3>
      <input type="text" onChange={handleChange} value={course} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursePage;
