import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./component/DashBoard.jsx";
import TopBar from "./component/TopBar.jsx";
import Summary from "./component/Summary.jsx";
import Orders from "./component/Orders.jsx";
import Holdings from "./component/Holdings.jsx";
import Positions from "./component/Positions.jsx";
import Funds from "./component/Funds.jsx";
import Apps from "./component/Apps.jsx";
import Varsity from "./component/Varsity.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopBar />
        <DashBoard />
      </>
    ),
    children: [
      { index: true, element: <Summary /> },
      { path: "orders", element: <Orders /> },
      { path: "holdings", element: <Holdings /> },
      { path: "positions", element: <Positions /> },
      { path: "funds", element: <Funds /> },
      {
        path: "apps",
        element: <Apps />,
        children: [{ path: "/apps/learn", element: <Varsity /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
