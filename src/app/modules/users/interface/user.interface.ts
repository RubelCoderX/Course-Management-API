/* eslint-disable no-unused-vars */

import { USER_ROLE } from "../constant/user.constant";
export type TUser = {
  id: any;
  name: string;
  profession?: string;
  email: string;
  password: string;
  role: "user" | "admin";
  gender: "male" | "female";
  birthDate: Date;
};

export type TUserRole = keyof typeof USER_ROLE;


export type TUserLogin = {
  email: string;
  password: string;
};