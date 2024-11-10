import { Navigate, RouteObject } from "react-router-dom"
import { Analytics, Approval, Budget, Dashboard } from "./lazy"
import { Routes } from "./routes"

export const dashboardRoutes = () => {
  return [
    {
      path: Routes.dashboard,
      element: <Dashboard />,
    },

    {
      path: Routes.approval,
      element: <Approval />,
    },

    {
      path: Routes.budget,
      element: <Budget />,
    },

    {
      path: Routes.analytics,
      element: <Analytics />,
    },

    {
      path: Routes.dashboard,
      element: <Navigate to={Routes.dashboard} replace />,
    },
  ] as RouteObject[]
}
