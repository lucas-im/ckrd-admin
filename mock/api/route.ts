import type { MockMethod } from "vite-plugin-mock";
import { routeModel } from "../model";

const apis: MockMethod[] = [
  {
    url: "/mock/getUserRoutes",
    method: "post",
    response: (options: Service.MockOption): Service.MockServiceResult => {
      const { userId = undefined } = options.body;

      const routeHomeName: AuthRoute.RouteKey = "report_reports";

      // const role = userModel.find((item) => item.userId === userId)?.role || "user";

      const filterRoutes = routeModel[admin];

      return {
        code: 200,
        message: "ok",
        data: {
          routes: routeModel,
          home: routeHomeName,
        },
      };
    },
  },
];

export default apis;
