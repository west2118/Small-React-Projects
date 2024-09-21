import React from "react";
import Card from "./Card";

const UserItem = ({ information }) => {
  return (
    <>
      <Card>
        <p>
          <span>{information.name}</span> (<span>{information.userAge}</span>
          years old)
        </p>
      </Card>
    </>
  );
};

export default UserItem;
