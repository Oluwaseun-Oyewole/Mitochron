import Analytics from "../assets/svg/analytic.svg"
import Workflow from "../assets/svg/approval.svg"
import Budget from "../assets/svg/budget.svg"
import Dashboard from "../assets/svg/dashboard.svg"
import { Routes } from "./routes"

export interface AppRoutesType {
  id: number
  path: string
  name: string
  imagePath: string
}

const appRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.dashboard,
    name: "Dashboard",
    imagePath: Dashboard,
  },
  {
    id: 2,
    path: Routes.approval,
    name: "Approval Workflow",
    imagePath: Workflow,
  },
  {
    id: 3,
    path: Routes.budget,
    name: "Budget room",
    imagePath: Budget,
  },
  {
    id: 4,
    path: Routes.analytics,
    name: "Analytics",
    imagePath: Analytics,
  },
]

export default appRoutes
