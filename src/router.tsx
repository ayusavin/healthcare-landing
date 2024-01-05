import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";

export const routes = {
  HOME: {
    path: "/",
    element: <Root />
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
