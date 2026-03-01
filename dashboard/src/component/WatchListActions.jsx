
import {Tooltip, Grow} from "@mui/material"
import { IoStatsChartSharp } from "react-icons/io5"
import { IoIosMore } from "react-icons/io"
import {useDispatch} from "react-redux"
import { orderActions } from "../store/ordersSlice"


const WatchListActions = ({uid}) => {
  const dispatch = useDispatch();


  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => dispatch(orderActions.openDialog({stock: uid, type: "BUY"}))}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={() => dispatch(orderActions.openDialog({stock: uid, type: "SELL"})  )}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <IoStatsChartSharp className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <IoIosMore className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}
export default WatchListActions;