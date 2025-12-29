import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskModal = ({ task, onClose }) => {
  const { updateTask } = useTasks();
  const [desc, setDesc] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    updateTask(task.id, { description: desc, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-3">{task.title}</h2>

        <textarea
          className="border p-2 w-full mb-3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-3"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
