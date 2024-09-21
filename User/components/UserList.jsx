import React from "react";
import UserItem from "./UserItem";

const UserList = ({ information }) => {
  return (
    <>
      {information.length > 0 && (
        <div className="w-full bg-white flex flex-col rounded-lg gap-3">
          <div className="w-full bg-white flex flex-col p-4 rounded-lg gap-3">
            {information.map((user) => (
              <UserItem information={user} key={user.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
