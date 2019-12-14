"use strict";

/*
|--------------------------------------------------------------------------
| UniversitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UniversitySeeder {
  async run() {
    // University
    const universities = await Factory.model(
      "App/Models/University"
    ).createMany(10);

    await Promise.all(
      universities.map(async university => {
        // Courses
        const courses = await Factory.model("App/Models/Course").createMany(
          20,
          { university_id: university.id }
        );

        await Promise.all(
          courses.map(async course => {
            // Subjects
            await Factory.model("App/Models/Subject").createMany(20, {
              course_id: course.id
            });
          })
        );

        // Grade Points
        const points = [
          { grade: "A", point: 5, university_id: university.id },
          { grade: "B", point: 4, university_id: university.id },
          { grade: "C", point: 3, university_id: university.id },
          { grade: "D", point: 2, university_id: university.id },
          { grade: "F", point: 0, university_id: university.id }
        ];

        await Promise.all(
          points.map(async point => {
            await university.gradePoints().create(point);
          })
        );
      })
    );
    console.log("done");
  }
}

module.exports = UniversitySeeder;
