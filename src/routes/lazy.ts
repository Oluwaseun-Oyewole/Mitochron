import { lazyLoadRoutes } from "../utils/routes"

export const Home = lazyLoadRoutes("/")
export const Dashboard = lazyLoadRoutes("dashboard")
export const Approval = lazyLoadRoutes("approval")
export const Budget = lazyLoadRoutes("budget")
export const Analytics = lazyLoadRoutes("analytics")
export const Login = lazyLoadRoutes("login")
