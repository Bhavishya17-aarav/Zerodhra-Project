import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import WatchListActions from "./WatchListActions";



const WatchListItem = ({stock}) => {

  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };


  return ( 
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo ">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <IoIosArrowDown className="down" style={{margin: "8px"}} />

          ) : (
            <IoIosArrowUp className="up" style={{margin: "8px"}} />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name}/>}
    </li>
  );
}

export default WatchListItem;