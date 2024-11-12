import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error404 from "./components/error-404.jsx";
import Protect from "./middleware/protect.jsx";
import { AuthProvider } from "./contexts/auth-context.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Protect page="home" />} />
      <Route path="/auth/signup" element={<Protect page="signup" />} />
      <Route path="/auth/signin" element={<Protect page="signin" />} />
      <Route path="*" element={<Error404 />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </StrictMode>
);
