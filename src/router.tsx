import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

export const routes = {
  HOME: {
    path: "/",
    element: <HomePage />
  },
  SEARCH: {
    path: "/search",
  },
  APPS: {
    path: "/apps",
  },
  TESTIMONIALS: {
    path: "/testimonials",
  },
  ABOUT: {
    path: "/about",
  }
}

const router = createBrowserRouter(
  Object.values(routes)
);

export default router;
