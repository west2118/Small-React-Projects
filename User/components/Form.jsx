import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Form = ({ addNewUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [invalidText, setInvalidText] = useState(null);

  const validateInput = () => {
    if (age < 0) {
      setModalText("Please enter a valid age (greater than 0)");
      setInvalidText("Age");
      return false;
    }

    if (!username || !age || !isNaN(username)) {
      setModalText("Please put valid Username & Age");
      setInvalidText("Input");
      return false;
    }

    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      setShowModal(true);
      return;
    }

    const userInformation = {
      name: username,
      userAge: +age,
      id: Math.random().toString(),
    };

    addNewUser(userInformation);
    setUsername("");
    setAge("");
  };

  return (
    <>
      <form
        className="w-full bg-white flex flex-col p-4 rounded-lg"
        onSubmit={submitHandler}>
        <label htmlFor="username" className="mb-1 font-semibold">
          Name
        </label>
        <input
          type="text"
          name="username"
          className="border border-black mb-4 py-1 px-2"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="age" className="mb-1 font-semibold">
          Age (Years)
        </label>
        <input
          type="number"
          name="age"
          className="border border-black py-1 px-2"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button type="submit" className="bg-black w-32 py-1.5 text-white mt-4">
          Add User
        </button>
      </form>
      {showModal && (
        <Modal
          modalText={modalText}
          invalidText={invalidText}
          handleOkay={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Form;
