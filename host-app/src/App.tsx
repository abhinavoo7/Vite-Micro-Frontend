import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./containers/Home";
import React, { Suspense } from "react";
const RemoteHome = React.lazy(() => import("remoteApp/RemoteHome"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/remoteHome",
    element: (
      <Suspense fallback={<span>Loading...</span>}>
        <RemoteHome />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
