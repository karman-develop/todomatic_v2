import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { data } from "./script/data";
import { Input } from "./Input";
import { List } from "./List";
import { Filter } from "./Filter";

function App() {
  const [items, setItems] = useState(data);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("All");

  const handleClick = (checkItems) => {
    const newItems = items.map((item) => {
      if (item.id === checkItems.id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setItems(newItems);
  };

  const handleTitle = (newTitle) => {
    setItems([...items, { id: uuidv4(), title: newTitle, completed: false }]);
    setTitle("");
  };

  const handleDel = (checkItems) => {
    const newItems = items.filter((item) => item.id !== checkItems.id);
    setItems(newItems);
  };

  const handleFilter = (tab) => {
    setFilter(tab);
  };

  const displayItems = items.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return !item.completed;
    if (filter === "Complete") return item.completed;
    return false;
  });

  return (
    <>
      <h1>Todo Matic</h1>
      <p>What need to be complete?</p>

      <Input title={title} setTitle={setTitle} addTitle={handleTitle} />

      <Filter tab={handleFilter} />

      <p>{displayItems.length} tasks remaining</p>
      <ul>
        {displayItems.map((item, index) => (
          <List
            key={index}
            item={item}
            index={index}
            onCheck={handleClick}
            onDel={handleDel}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
