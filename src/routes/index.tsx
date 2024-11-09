import { createBrowserRouter, Navigate } from "react-router-dom"
import ErrorPage from "../components/custom/error"
import AuthLayout from "../layouts/auth"
import DashboardLayout from "../layouts/dashboard"
import { isAuthenticated, isUnAuthenticated } from "../utils/helper"
import { authenticationRoutes } from "./authentication.routes"
import { dashboardRoutes } from "./dashboard.routes"
import RouteProtection from "./routeProtection"
import { Routes } from "./routes"

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.dashboard} replace />,
    errorElement: <ErrorPage />,
  },

  {
    path: Routes.auth,
    element: (
      <RouteProtection
        redirect={Routes.dashboard}
        validations={[isUnAuthenticated]}
      >
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authenticationRoutes()],
  },
  {
    path: Routes.dashboard,
    element: (
      <RouteProtection redirect={Routes.login} validations={[isAuthenticated]}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes()],
  },
])

export default routes
