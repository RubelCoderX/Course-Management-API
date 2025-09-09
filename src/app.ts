import express, { Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import router from "./app/routes";
const app = express();

//parser
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [config.client_url as string],
  })
);
//application route
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Course Management API");
});

// app.use(globalErrorHandler);
// //not found
// app.use(notFound);
export default app;
