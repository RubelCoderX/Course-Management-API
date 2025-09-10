import { model, Schema } from "mongoose";
import { TCourse } from "../interface/course.interface";

const TCourseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = model<TCourse>("Course", TCourseSchema);
