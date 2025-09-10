import { TPurchase } from "../interface/purchase.interface";
import { Purchase } from "../model/purchase.model";

const createPurchase = async (payload: TPurchase) => {
  const result = await Purchase.create(payload);
  return result;
};
const getAllPurchase = async () => {
  const result = await Purchase.find();
  return result;
};

export const PurchaseService = {
  createPurchase,
  getAllPurchase,
};
