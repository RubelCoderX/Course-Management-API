import { TCourse } from "../interface/course.interface";
import { Course } from "../model/course.model";

const createCourse = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
const getAllCourse = async () => {
  const result = await Course.find();
  return result;
};

const getSingleCourseById = async (courseId) => {
  const result = await Course.findById(courseId);
  return result;
};

const deleteCourseById = async (courseId) => {
  const result = await Course.findByIdAndDelete(courseId);
};

export const CourseServices = {
  createCourse,
  getAllCourse,
  getSingleCourseById,
  deleteCourseById,
};
