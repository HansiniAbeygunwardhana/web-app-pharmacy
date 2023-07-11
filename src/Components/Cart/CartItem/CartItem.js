import React from "react";
import "./CartItem.scss";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="CartItem">
      <div className="CartItem__img">
        <MarkChatUnreadIcon />
      </div>
      <div className="CartItem__product">{name}</div>
      <div className="CartItem__product">{price}LKR</div>
      <div className="CartItem__product__subcontainer">
        <div className="CartItem__product__subcontainer">
          <AddIcon />
        </div>
        <div>{quantity}</div>
        <div>
          <AddIcon />
        </div>
      </div>
      <div className="CartItem__product__subcontainer">
        <div className="CartItem__product__subcontainer">
          <DeleteIcon />
        </div>
        <div>
          <EditIcon />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
