"use strict";

class SubjectPolicy {
  update(university, subject) {
    const uni = subject.university().get();
    if (uni.id !== university.id) {
      const msg = "You are currently unauthorized to update this course.";
      return Policy.deny(msg);
    }

    return true;
  }

  destroy(university, subject) {
    const uni = subject.university().get();
    if (uni.id !== university.id) {
      const msg = "You are currently unauthorized to delete this course.";
      return Policy.deny(msg);
    }

    return true;
  }

  index(university) {}
  show(university, subject) {}
  create(university) {}
  create(edit) {}
}

module.exports = SubjectPolicy;
