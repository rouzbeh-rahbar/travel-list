import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// This array with a few objects.
// Each objects describes one item to be packed
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// function Logo() {
//   return <h1>🌴 Travel 🧳</h1>;
// }
// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [select, setSelect] = useState(1);

//   function handleSubit(e) {
//     e.preventDefault();
//     if (!description) return;
//     const newItem = { description, select, packed: false, id: Date.now() };
//     onAddItems(newItem);
//     setDescription("");
//     setSelect(1);
//   }
//   return (
//     <form className="add-form" onSubmit={handleSubit}>
//       <h3>What do you need for your 😍 trip?</h3>
//       <select
//         value={select}
//         onChange={(e) => setSelect(Number(e.target.value))}
//       >
//         {/* current value abd index. index(0) + 1 = 1 */}
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }
// function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item
//             item={item}
//             onDeleteItem={onDeleteItem}
//             onToggleItem={onToggleItem}
//             key={item.id}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item, onDeleteItem, onToggleItem }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItem(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }
// function Stats({ item }) {
//   if (!item.length)
//     return (
//       <p className="stats">
//         <em>Start adding some items to your packing list 🚀</em>
//       </p>
//     );

//   const numItems = item.length;
//   const numPacked = item.filter((items) => items.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);
//   return (
//     <footer className="stats">
//       <em>
//         {percentage === 100
//           ? "You got everything! Ready to go ✈️"
//           : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
//       </em>
//     </footer>
//   );
// }
