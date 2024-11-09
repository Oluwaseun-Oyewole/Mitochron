import { Navigate, RouteObject } from "react-router-dom"
import { Login } from "./lazy"
import { Routes } from "./routes"

export const authenticationRoutes = () => {
  return [
    {
      path: Routes.login,
      element: <Login />,
    },

    { path: "/auth", element: <Navigate to={Routes.login} replace /> },
  ] as RouteObject[]
}
