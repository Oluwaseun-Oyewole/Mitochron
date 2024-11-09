import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import Loader from "./components/custom/loading/index.tsx"
import "./index.css"
import routes from "./routes"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} fallbackElement={<Loader />} />
    </Suspense>
  </StrictMode>
)
