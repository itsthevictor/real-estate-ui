import { Home, List, Login, Register, Listing } from "./pages";

import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", index: true, element: <Home /> },
        {
          path: "list",
          element: <List />,
        },
        {
          path: "sign-up",
          element: <Register />,
        },
        {
          path: "sign-in",
          element: <Login />,
        },
        {
          path: "/:id",
          element: <Listing />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
