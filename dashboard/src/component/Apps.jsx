import { useNavigate } from "react-router-dom";
import {Outlet} from "react-router-dom";

const Apps = () => {
  const navigate = useNavigate();

  const appsData = [
    {
      name: "Kite",
      desc: "Trade stocks, F&O and more",
      path: "/",
    },
    {
      name: "Console",
      desc: "Portfolio & P&L reports",
      path: "/holdings",
    },
    {
      name: "Coin",
      desc: "Invest in Mutual Funds",
      path: "/funds",
    },
    {
      name: "Varsity",
      desc: "Learn stock market basics",
      path: "/apps/learn",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Zerodha Products</h2>

      <div className="row">
        {appsData.map((app, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div
              className="card shadow-sm p-3 app-card"
              onClick={() => navigate(app.path)}
              style={{ cursor: "pointer" }}
            >
              <h4>{app.name}</h4>
              <p>{app.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Apps;