"use strict";

const Policy = require("./Policy");

class CoursePolicy {
  update(university, course) {
    if (course.university_id !== university.id) {
      const msg = "You are currently unauthorized to update this course.";
      return Policy.deny(msg);
    }

    return true;
  }

  destroy(university, course) {
    console.log("Ddd");
    if (course.university_id !== university.id) {
      const msg = "You are currently unauthorized to delete this course.";
      return Policy.deny(msg);
    }

    return true;
  }
}

module.exports = CoursePolicy;
