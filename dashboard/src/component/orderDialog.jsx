

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { orderActions, placeOrder } from "../store/ordersSlice";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchHoldings } from "../store/holdingSlice";

const OrderDialog = () => {
  const dispatch = useDispatch();
  const { isOpen, selectedStock, orderType, loading} =
    useSelector((state) => state.order);

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    dispatch(
          placeOrder({
        stock: selectedStock,
        quantity,
        price,
        type: orderType,
      })
    )

        .unwrap()
    .then(() => {
      dispatch(fetchHoldings());
    });

  };

  return (
    <Dialog open={isOpen} onClose={() => dispatch(orderActions.closeDialog())}>
      <DialogTitle>
        {orderType} {selectedStock}
      </DialogTitle>

      <DialogContent>
        <TextField
          label="Quantity"
          type="number"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          sx={{ mt: 2 }}
        />

        <TextField
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{ mt: 2 }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => dispatch(orderActions.closeDialog())}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color={orderType === "BUY" ? "success" : "error"}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Placing..." : orderType}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;