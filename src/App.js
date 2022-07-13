import { useState } from "react";
import List from "./components/1UserList/List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Mary" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("New");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <List users={users} />
    </div>
  );
}

export default App;
