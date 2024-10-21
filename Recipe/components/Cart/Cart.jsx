import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = ({ hideModalHandler }) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderItemHandler = () => {
    setIsOrdering(true);
  };

  const submitOrderHandler = async (userData) => {
    await fetch(
      "https://recipe-37b92-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          items: cartCtx.items,
        }),
      }
    );
    setIsSubmitted(true);
    cartCtx.clearItem();
  };

  const didSubmit = (
    <>
      <p className="text-2xl font-semibold">The order is SuccessFully!</p>
      <div className="text-end">
        <button
          onClick={hideModalHandler}
          className="py-2 px-8 border rounded-full font-semibold mt-4 bg-orange-800 text-white ml-4">
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal>
      {!isSubmitted ? (
        <ul className="max-h-[70vh] overflow-y-auto scrollable-content pt-6">
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={cartAddItemHandler.bind(null, item)}
              onRemove={cartRemoveItemHandler.bind(null, item.id)}
            />
          ))}
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Total Amount</h2>
            <p className="text-2xl font-bold">
              ${cartCtx.totalAmount.toFixed(2)}
            </p>
          </div>
          {!isOrdering && (
            <div className="text-end">
              <button
                onClick={hideModalHandler}
                className="py-2 px-8 border border-orange-800 rounded-full font-semibold mt-4 text-orange-800 hover:text-white hover:bg-orange-800">
                Close
              </button>
              {hasItems && (
                <button
                  onClick={orderItemHandler}
                  className="py-2 px-8 border rounded-full font-semibold mt-4 bg-orange-800 text-white ml-4">
                  Order
                </button>
              )}
            </div>
          )}
          {isOrdering && (
            <Checkout
              submitOrderHandler={submitOrderHandler}
              hideModalHandler={hideModalHandler}
            />
          )}
        </ul>
      ) : (
        <>{didSubmit}</>
      )}
    </Modal>
  );
};

export default Cart;
