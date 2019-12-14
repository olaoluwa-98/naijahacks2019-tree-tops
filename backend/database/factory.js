"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Course", async (faker, i, data) => {
  return {
    name: faker.word(),
    university_id: data.university_id
  };
});

Factory.blueprint("App/Models/Subject", async (faker, i, data) => {
  const code =
    faker.string({
      length: 5,
      casing: "upper",
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }) + faker.integer({ min: 100, max: 500 });

  return {
    code,
    name: faker.word(),
    course_id: data.course_id,
    unit: faker.integer({ min: 0, max: 4 }),
    preference_business_weight: faker.integer({ min: 0, max: 10 }),
    preference_humanities_weight: faker.integer({ min: 0, max: 10 }),
    preference_science_weight: faker.integer({ min: 0, max: 10 }),
    preference_engineering_weight: faker.integer({ min: 0, max: 10 })
  };
});

Factory.blueprint("App/Models/University", faker => {
  return {
    name: faker.username(),
    email: faker.email(),
    password: "password"
  };
});
