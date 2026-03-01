
import OrderDialog from "./orderDialog";
import WatchList from "./WatchList";
import { Outlet } from "react-router-dom";

const DashBoard = () => {

  return <div className="dashboard-container">
    <WatchList/>
    <div className="content">
       <Outlet />
    </div>
    <OrderDialog />
  </div>
};

export default DashBoard;