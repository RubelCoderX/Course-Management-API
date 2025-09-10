import httpStatus from "http-status";
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { TUserRole } from "../modules/users/interface/user.interface";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";
import { User } from "../modules/users/model/user.model";

const auth = (...userRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    const { email, role, iat } = decoded;

    const existingUser = await User.isUserExists(email);
    if (!existingUser) {
      throw new AppError(httpStatus.FORBIDDEN, "Forbidden access!");
    }

    if (userRoles && !userRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You have no access to this route!"
      );
    }

    req.user = decoded;

    next();
  });
};

export default auth;
