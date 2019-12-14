"use strict";

const Gate = use("Gate");

Gate.policy("App/Models/Course", "App/Policies/CoursePolicy");
Gate.policy("App/Models/Subject", "App/Policies/SubjectPolicy");
