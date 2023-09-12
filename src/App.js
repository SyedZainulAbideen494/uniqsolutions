import "./index.css";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import English from "./english";
import Arabic from "./arabic";
import { Fragment } from "react";
import French from "./french";
import China from "./china";
import Deu from "./deu";
import Gu from "./gu";
import Hi from "./hi";
import Ko from "./ko";
import Ma from "./ma";
import Ka from "./ka";
import Tamil from "./ta";
import Telugu from "./te";

const router = createBrowserRouter([
  { path: "/", element: <English/> },
  {path: "/ar", element:<Arabic/>},
  {path: "/fr", element: <French/>},
  {path: '/ch', element: <China/>},
  {path: 'de', element:<Deu/>},
  {path: '/gu', element:<Gu/>},
  {path: '/hi', element:<Hi/>},
  {path: '/ko', element:<Ko/>},
  {path: '/ma', element:<Ma/>},
  {path: '/ka', element:<Ka/>},
  {path: '/ta', element:<Tamil/>},
  {path : '/te', element:<Telugu/>},
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
