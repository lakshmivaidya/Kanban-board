import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { v4 as uuid } from "uuid";

const AddTaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;

    addTask({
      id: uuid(),
      title,
      description: desc,
      status: "todo",
    });

    setTitle("");
    setDesc("");
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg max-w-md">
      <input
        className="border p-2 w-full mb-3"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3"
        placeholder="Task Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;