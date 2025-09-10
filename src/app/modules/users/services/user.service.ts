import config from "../../../config";
import AppError from "../../../error/AppError";
import { TUser, TUserLogin } from "../interface/user.interface";
import { User } from "../model/user.model";

import httpStatus from "http-status";
import { createToken } from "../utils/utils.user";

const createRegisterUser = async (userData: TUser) => {
  const user = await User.create(userData);
  return user;
};
const createLoginUser = async (payload: TUserLogin) => {
  const user = await User.isUserExists(payload.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const jwtPayload = {
    userId: user?.id,
    email: user.email,
    role: user.role,
    name: user.name,
  };
  // create token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  // refresh token
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );
  return {
    accessToken,
    refreshToken,
  };
};
export const UserService = {
  createRegisterUser,
  createLoginUser,
};
