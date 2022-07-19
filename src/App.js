import { useState, useEffect, useMemo, useCallback } from "react";
import List from "./components/1UserList/List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Mary" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );
  // const handleDelete = (userId) => {
  //   setUsers(users.filter((user) => user.id !== userId));
  // };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        // console.log("filter process");
        return user.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      }),
    [search, users]
  );
  // const filteredUsers = users.filter((user) => {
  //   console.log("filter process");
  //   return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  // });

  const printUser = useCallback(() => {
    console.log("Changed Users", users);
  }, [users]);

  useEffect(() => {
    console.log("App Render");
  });

  useEffect(() => {
    printUser();
  }, [users, printUser]);

  return (
    <div>
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
