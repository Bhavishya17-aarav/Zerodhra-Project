
import {useDispatch, useSelector} from "react-redux"
import { fetchHoldings } from "../store/holdingSlice.js";
import { useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";



const Holdings = () => {

  const dispatch = useDispatch();
 const holdings = useSelector((state) => state.holdings.items);

  useEffect(() => {
   dispatch(fetchHoldings());
  }, [dispatch]);

   const labels = holdings.map((subArray) => subArray["name"]);
   // its like a array of stock name
   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ]
    
  }

  return (
    <>
   <h3 className="title">Holdings ({holdings.length})</h3>
  <div className="order-table mb-5">
     <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
      </table>  
  </div>

   <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <div className="chart-container">
     <VerticalGraph data = {data}/>
     </div>
    </>
  )
}
export default Holdings;