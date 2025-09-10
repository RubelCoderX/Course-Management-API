import express from "express";
import { CourseControllers } from "../controllers/course.controllers";
import auth from "../../../middleware/auth";
import { USER_ROLE } from "../../users/constant/user.constant";

const router = express.Router();

router.post(
  "/create-course",
  auth(USER_ROLE.admin),
  CourseControllers.createCourseFromDb
);
router.get("/", auth(USER_ROLE.user), CourseControllers.getCourseFromDb);
router.get(
  "/get-course/:id",
  auth(USER_ROLE.user),
  CourseControllers.getSingleCourseFromDb
);
router.delete(
  "/delete-course",
  auth(USER_ROLE.admin),
  CourseControllers.deleteCourseById
);

export const CourseRoutes = router;
