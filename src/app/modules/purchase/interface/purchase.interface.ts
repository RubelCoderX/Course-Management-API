import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
export type TPurchase = {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  amount: number;
  date: Date;
};
