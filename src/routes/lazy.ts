import { lazyLoadRoutes } from "../utils/routes"

export const Home = lazyLoadRoutes("/")
export const Dashboard = lazyLoadRoutes("dashboard")
export const Login = lazyLoadRoutes("login")
