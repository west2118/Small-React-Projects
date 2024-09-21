import React from "react";
import UserList from "./components/UserList";
import Form from "./components/Form";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [information, setInformation] = useState([]);

  const addNewUser = (newUser) => {
    setInformation((prevUser) => {
      const updatedUsers = [newUser, ...prevUser];
      console.log(updatedUsers); // Log updated users here
      return updatedUsers;
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-slate-800">
      <div className="w-9/12 lg:w-3/6 flex items-center justify-center flex-col gap-4">
        <Form addNewUser={addNewUser} />
        <UserList information={information} />
      </div>
    </div>
  );
};

export default App;
