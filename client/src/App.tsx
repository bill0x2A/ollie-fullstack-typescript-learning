import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000";

type Todo = { id: number; text: string; completed: number };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await fetch(\`\${API_URL}/todos\`);
    setTodos(await res.json());
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    await fetch(\`\${API_URL}/todos\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    fetchTodos();
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(\`\${API_URL}/todos/\${id}\`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await fetch(\`\${API_URL}/todos/\${id}\`, { method: "DELETE" });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Todo App</h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task"
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{ marginTop: "1rem", padding: 0, listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={!!todo.completed}
              onChange={() => toggleTodo(todo.id, !!todo.completed)}
            />
            <span style={{ flex: 1, marginLeft: "0.5rem", textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
