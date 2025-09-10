import { model, Schema } from "mongoose";
import { TPurchase } from "../interface/purchase.interface";

const TPurchaseSchema = new Schema<TPurchase>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Purchase = model<TPurchase>("Purchase", TPurchaseSchema);
