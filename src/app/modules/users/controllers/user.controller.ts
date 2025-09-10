import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { UserService } from "../services/user.service";
import config from "../../../config";

const createUserFromDb = catchAsync(async (req, res) => {
  const result = await UserService.createRegisterUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User Create Successfully",
    data: result,
  });
});

const loginUserFromDb = catchAsync(async (req, res) => {
  const result = await UserService.createLoginUser(req.body);
  const { accessToken, refreshToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: config.node_dev === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    message: "User logged in successfully",
    statusCode: httpStatus.OK,
    data: { accessToken, refreshToken },
  });
});
const logoutUserFromDb = catchAsync(async (req, res) => {
  // Clear refresh token cookie
  res.clearCookie("refreshToken", {
    secure: config.node_dev === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    message: "User logged out successfully",
    statusCode: httpStatus.OK,
    data: null,
  });
});

export const UserController = {
  createUserFromDb,
  loginUserFromDb,
  logoutUserFromDb,
};
