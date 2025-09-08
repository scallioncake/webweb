import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen/Screen";
import { About } from "./screens/About/About";
import { Project } from "./screens/Project/Project";
import { Blog } from "./screens/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
