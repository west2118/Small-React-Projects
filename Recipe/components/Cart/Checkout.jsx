import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = ({ hideModalHandler, submitOrderHandler }) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const nameInputValue = nameInputRef.current.value;
    const streetInputValue = streetInputRef.current.value;
    const postalInputValue = postalInputRef.current.value;
    const cityInputValue = cityInputRef.current.value;

    const nameValidation = !isEmpty(nameInputValue);
    const streetValidation = !isEmpty(streetInputValue);
    const postalValidation = isFiveChar(postalInputValue);
    const cityValidation = !isEmpty(cityInputValue);

    setFormInputValidity({
      name: nameValidation,
      street: streetValidation,
      postal: postalValidation,
      city: cityValidation,
    });

    const isFormValid =
      nameValidation && streetValidation && postalValidation && cityValidation;

    if (!isFormValid) {
      return;
    }

    submitOrderHandler({
      name: nameInputValue,
      street: streetInputValue,
      postal: postalInputValue,
      city: cityInputValue,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className={`font-semibold ${
              !formInputValidity.name ? "text-red-600" : "text-black"
            }`}>
            Your Name
          </label>
          <input
            ref={nameInputRef}
            type="text"
            name="name"
            className={`w-3/6 border ${
              formInputValidity.name
                ? "border-black bg-transparent"
                : "border-red-600 bg-red-100"
            } py-1 px-2 text-base mt-1`}
          />
          {!formInputValidity.name && <p className="mt-1">Input Valid Name</p>}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="street"
            className={`font-semibold ${
              !formInputValidity.street ? "text-red-600" : "text-black"
            }`}>
            Street
          </label>
          <input
            ref={streetInputRef}
            type="text"
            name="street"
            className={`w-3/6 border ${
              formInputValidity.street
                ? "border-black bg-transparent"
                : "border-red-600 bg-red-100"
            } py-1 px-2 text-base mt-1`}
          />
          {!formInputValidity.street && (
            <p className="mt-1">Input Valid Street</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="postal"
            className={`font-semibold ${
              !formInputValidity.postal ? "text-red-600" : "text-black"
            }`}>
            Postal
          </label>
          <input
            ref={postalInputRef}
            type="text"
            name="postal"
            className={`w-3/6 border ${
              formInputValidity.postal
                ? "border-black bg-transparent"
                : "border-red-600 bg-red-100"
            } py-1 px-2 text-base mt-1`}
          />
          {!formInputValidity.postal && (
            <p className="mt-1">Input Valid Postal</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="city"
            className={`font-semibold ${
              !formInputValidity.city ? "text-red-600" : "text-black"
            }`}>
            City
          </label>
          <input
            ref={cityInputRef}
            type="text"
            name="city"
            className={`w-3/6 border ${
              formInputValidity.city
                ? "border-black bg-transparent"
                : "border-red-600 bg-red-100"
            } py-1 px-2 text-base mt-1`}
          />
          {!formInputValidity.city && <p className="mt-1">Input Valid City</p>}
        </div>
      </div>

      <div className="flex items-center justify-end my-4 gap-4">
        <button
          type="button"
          onClick={hideModalHandler}
          className="py-2 px-8 border border-orange-800 rounded-full font-semibold">
          Close
        </button>
        <button className="py-2 px-8 border bg-orange-800 rounded-full text-white font-semibold">
          Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
