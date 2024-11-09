import { lazy } from "react"

export const lazyLoadRoutes = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`))
