import React, { useEffect } from "react";
import Item from "./Item";

function List({ users }) {
  useEffect(() => {
    console.log("List Render");
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default List;
