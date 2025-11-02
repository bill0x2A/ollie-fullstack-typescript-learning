import express from "express";
import cors from "cors";
import { db } from "./db";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", (_req, res) => {
  const todos = db.prepare("SELECT * FROM todos").all();
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { text } = req.body;
  const result = db
    .prepare("INSERT INTO todos (text) VALUES (?)")
    .run(text);
  res.json({ id: result.lastInsertRowid, text, completed: 0 });
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.prepare("UPDATE todos SET completed = ? WHERE id = ?").run(
    completed ? 1 : 0,
    id
  );
  res.json({ success: true });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  db.prepare("DELETE FROM todos WHERE id = ?").run(id);
  res.json({ success: true });
});

app.listen(3000, () => console.log("API running at http://localhost:3000"));
