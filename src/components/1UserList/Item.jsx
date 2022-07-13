import React from "react";

function Item({ user }) {
  // console.log(user);

  return (
    <>
      <li>{user.name}</li>
    </>
  );
}

export default Item;
