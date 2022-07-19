import React, { memo, useEffect } from "react";

const Item = memo(({ user }) => {
  useEffect(() => {
    // console.log("Item Render");
  });

  return (
    <>
      <li>{user.name}</li>
    </>
  );
});

export default Item;
