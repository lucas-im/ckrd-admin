import type { MockMethod } from "vite-plugin-mock";
import { routeModel } from "../model";

const apis: MockMethod[] = [
  {
    url: "/mock/getUserRoutes",
    method: "post",
    response: (options: Service.MockOption): Service.MockServiceResult => {
      const { userId = undefined } = options.body;

      const routeHomeName: AuthRoute.RouteKey = "report_reports";

      // const role = UserModel.find((item) => item.userId === userId)?.userRole || "user";

      // const filterRoutes = routeModel[role];

      return {
        code: 200,
        message: "ok",
        data: {
          // routes: filterRoutes,
          home: routeHomeName,
        },
      };
    },
  },
];

export default apis;
