import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { CourseServices } from "../services/course.service";

const createCourseFromDb = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourse(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Create Course Successfully",
    data: result,
  });
});
const getCourseFromDb = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourse();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: " Course get Successfully",
    data: result,
  });
});
const getSingleCourseFromDb = catchAsync(async (req, res) => {
  const courseId = req.params;
  const result = await CourseServices.getSingleCourseById(courseId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Single Course Successfully",
    data: result,
  });
});
const deleteCourseById = catchAsync(async (req, res) => {
  const courseId = req.params;
  const result = await CourseServices.deleteCourseById(courseId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: " Course Delete Successfully",
    data: result,
  });
});


export const CourseControllers = {
    createCourseFromDb,
    getCourseFromDb,
    getSingleCourseFromDb,
    deleteCourseById
} 
