import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

const Column = ({ status, title, tasks, onTaskClick }) => {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-100 p-4 rounded-lg w-full md:w-1/3 shadow min-h-[300px]"
    >
      <h2 className="font-bold mb-4 text-lg">{title}</h2>

      <div className="space-y-3">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => onTaskClick(task)}
            />
          ))}
      </div>
    </div>
  );
};

export default Column;
