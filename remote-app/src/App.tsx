import { createBrowserRouter, RouterProvider } from "react-router";
import { RemoteHome } from "./RemoteHome";
import { SecondRemote } from "./SecondRemote";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RemoteHome />,
  },
  {
    path: "/remoteHome",
    element: <RemoteHome />,
  },
  {
    path: "/secondRemote",
    element: <SecondRemote />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
