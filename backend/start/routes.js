"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

/**
 * Constant declaration.
 */
const API_V1 = "api/v1";

Route.group(() => {
  // 🔐 Authentication (Student)
  Route.post("auth/student/signup", "V1/AuthController.signupStudent").validator('Auth/Student/Signup'); // prettier-ignore
  Route.post("auth/student/login", "V1/AuthController.loginStudent").validator('Auth/Student/Login'); // prettier-ignore
  Route.post("auth/student/logout", "V1/AuthController.logoutStudent");

  // 🔐 Authentication (University)
  Route.post("auth/university/logout", "V1/AuthController.logoutUniversity");
  Route.post("auth/university/login", "V1/AuthController.loginUniversity").validator('Auth/University/Login'); // prettier-ignore

  // 🏫 University
  Route.get("universities", "V1/UniversityController.index");

  // 📔 University Courses
  Route.get("universities/:university/courses", "V1/CourseController.index");
  Route.get("universities/:university/courses/:course", "V1/CourseController.show"); // prettier-ignore

  // 📔 University Courses Subjects
  Route.get("courses/:course/subjects", "V1/SubjectController.index");
  Route.get("courses/:course/subjects/:subject", "V1/SubjectController.show");
}).prefix(API_V1);

Route.group(() => {
  // 👱 Profile
  Route.get("profile", "V1/StudentController.profile");
  Route.put("profile", "V1/StudentController.updateProfile").validator('Profile/Student/Update'); // prettier-ignore

  // 💥 Recommendations
  Route.get("me/recommendation", "V1/StudentController.getRecommendation");
})
  .prefix(API_V1)
  .middleware("auth:student");

Route.group(() => {
  // 🏫 Profile
  Route.get("u/profile", "V1/UniversityController.profile"); // ?include=gradePoints
  Route.put("u/profile", "V1/UniversityController.updateProfile").validator('Profile/University/Update'); // prettier-ignore

  // University Courses
  Route.delete("courses/:course", "V1/CourseController.destroy"); // ?include=subjects
  Route.post("courses", "V1/CourseController.store").validator('Courses/Create'); // prettier-ignore
  Route.put("courses/:course", "V1/CourseController.update").validator('Courses/Update'); // prettier-ignore

  // Subject
  Route.delete("courses/:course/subjects/:subject", "V1/SubjectController.destroy"); //prettier-ignore
  Route.post("courses/:course/subjects/bulk", "V1/SubjectController.storeBulk").validator('Subject/CreateBulk'); // prettier-ignore
  Route.put("courses/:course/subjects/:subject", "V1/SubjectController.update").validator('Subject/Update'); // prettier-ignore
})
  .prefix(API_V1)
  .middleware("auth:university");
