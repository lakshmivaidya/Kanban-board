import Board from "./pages/Board";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Board />
    </TaskProvider>
  );
}

export default App;