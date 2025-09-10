import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { PurchaseService } from "../services/purchase.service";

const createPurchaseFromDb = catchAsync(async (req, res) => {
  const result = await PurchaseService.createPurchase(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Create purchase Successfully",
    data: result,
  });
});
const getAllPurchaseFromDb = catchAsync(async (req, res) => {
  const result = await PurchaseService.getAllPurchase();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: " purchase get Successfully",
    data: result,
  });
});

export const PurchaseController = {
  createPurchaseFromDb,
  getAllPurchaseFromDb,
};
