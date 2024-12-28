import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import CircularProgressBar from "../components/CircularProgressBar";

interface Task {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/tasks")
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleCreateTask = (title: string) => {
    axios
      .post("http://localhost:5001/api/tasks", { title })
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => console.error(error));
  };

  const handleDeleteTask = (id: string) => {
    axios
      .delete(`http://localhost:5001/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) => console.error(error));
  };

  const handleToggleCompleted = (id: string) => {
    axios
      .put(`http://localhost:5001/api/tasks/${id}`, { completed: true })
      .then((response) =>
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)))
      )
      .catch((error) => console.error(error));
  };

  const handleEditTask = (id: string, title: string) => {
    axios
      .put(`http://localhost:5001/api/tasks/${id}`, { title })
      .then((response) =>
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)))
      )
      .catch((error) => console.error(error));
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.completed === (filter === "completed"));

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <>
      <div className="flex justify-center items-center mt-3">
        <img
          src="https://i.ibb.co/W6S3SL3/Captura-de-pantalla-2024-12-28-a-la-s-12-35-14-p-m.png"
          alt="Descripción de la imagen"
          className="w-[200px] h-auto rounded-full border border-gray-500"
        />
      </div>

      <div className="container mx-auto p-10">
        <div className="mb-4 p-4 bg-blue-200 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <CircularProgressBar percentage={completionPercentage} />
            <div className="ml-5">
              <h2 className="hidden md:block text-xl ml-20">
                Progreso del Día
              </h2>
              <p className="hidden md:block text-gray-600 mt-1 ml-20">
                ¡Sigue así! Cada tarea completada te acerca a tus metas.
              </p>
            </div>

            <div className="ml-5">
              <h2 className="text-xl ml-20">Aún te quedan</h2>
              <p className="text-gray-600 mt-1 ml-20">
                {pendingTasks} tareas pendientes
              </p>
            </div>
          </div>
        </div>

        <TaskForm onCreate={handleCreateTask} />

        <div className="mb-4">
          <button
            onClick={() => setFilter("all")}
            className="px-4 py-2 bg-gray-300 rounded mr-2"
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("completed")}
            className="px-4 py-2 bg-green-300 rounded mr-2"
          >
            Completadas
          </button>
          <button
            onClick={() => setFilter("pending")}
            className="px-4 py-2 bg-yellow-300 rounded"
          >
            Pendientes
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <p>Cargando tareas...</p>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                completed={task.completed}
                createdAt={task.createdAt}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
                onToggleCompleted={handleToggleCompleted}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
