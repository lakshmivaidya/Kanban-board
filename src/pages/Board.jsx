import { DndContext, closestCorners } from "@dnd-kit/core";
import Column from "../components/Column";
import AddTaskForm from "../components/AddTaskForm";
import TaskModal from "../components/TaskModal";
import { useTasks } from "../context/TaskContext";
import { useState } from "react";

const Board = () => {
  const { tasks, updateTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    updateTask(active.id, { status: over.id });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Kanban Board</h1>

      <AddTaskForm />

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <Column
            title="To Do"
            status="todo"
            tasks={tasks}
            onTaskClick={setSelectedTask}
          />
          <Column
            title="In Progress"
            status="inprogress"
            tasks={tasks}
            onTaskClick={setSelectedTask}
          />
          <Column
            title="Done"
            status="done"
            tasks={tasks}
            onTaskClick={setSelectedTask}
          />
        </div>
      </DndContext>

      {selectedTask && (
        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
};

export default Board;
