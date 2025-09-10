import { Router } from "express";
import { UserRoutes } from "../modules/users/routes/user.routesl";
import { CourseRoutes } from "../modules/course/routes/course.route";
import { PurchaseRoutes } from "../modules/purchase/routes/purchase.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/course",
    route: CourseRoutes,
  },
  {
    path: "/purchase",
    route: PurchaseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
