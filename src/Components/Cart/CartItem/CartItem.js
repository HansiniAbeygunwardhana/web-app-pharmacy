import React from "react";
import { useState } from "react";
import "./CartItem.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import CartService from "../../../Services/CartService";

const CartItem = ({ name, price, quantity, cartId, onCartItemDeleted }) => {
  const [editableQuantity, setEditableQuantity] = useState(quantity);
  const [isEditingQuantity, setIsEditingQuantity] = useState(false);
  const handleEditQuantity = () => {
    setIsEditingQuantity(true);
  };

  const handleUpdateQuantity = () => {
    // Make sure the quantity is a positive number
    if (editableQuantity > 0) {
      CartService.updateCartItemQuantity(cartId, editableQuantity)
        .then((response) => {
          // Update the quantity in the state after successful update
          setEditableQuantity(editableQuantity);
          setIsEditingQuantity(false);
        })
        .catch((error) => {
          console.error("Error updating cart item quantity:", error);
        });
    }
  };
  const handleDeleteItem = () => {
    CartService.deleteCartItem(cartId)
      .then((response) => {
        // Call the onCartItemDeleted callback function after successful deletion
        if (onCartItemDeleted) {
          onCartItemDeleted(cartId);
        }
      })
      .catch((error) => {
        console.error("Error deleting cart item:", error);
      });
  };
  return (
    <div className="CartItem">
      <div className="CartItem__img">
        <MarkChatUnreadIcon />
      </div>
      <div className="CartItem__product">{name}</div>
      <div className="CartItem__product">{price}LKR</div>
      <div className="CartItem__product__subcontainer">
        {isEditingQuantity ? (
          <div>
            <input
              type="number"
              value={editableQuantity}
              onChange={(e) => setEditableQuantity(Number(e.target.value))}
            />
            <button onClick={handleUpdateQuantity}>Save</button>
          </div>
        ) : (
          <div onClick={handleEditQuantity}>{quantity}</div>
        )}
      </div>
      <div className="CartItem__product__subcontainer">
        <div
          className="CartItem__product__subcontainer"
          onClick={handleDeleteItem}
        >
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
