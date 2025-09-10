import { Model, model, Schema } from "mongoose";
import { TUser } from "../interface/user.interface";
import bcrypt from "bcrypt";
import config from "../../../config";

interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>;
}

const TUserSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please fill a valid email address",
      ],
    },

    profession: { type: String, default: null },

    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    gender: { type: String, enum: ["male", "female"], required: true },
    birthDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
// password hashing
TUserSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_number)
  );

  next();
});

// set '' after saving password
TUserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

TUserSchema.statics.isUserExists = async function (email: string) {
  return await this.findOne({ email }).select("+password");
};

export const User = model<TUser, UserModel>("User", TUserSchema);
