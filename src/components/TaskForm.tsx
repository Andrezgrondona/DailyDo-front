import React, { useState } from "react";

interface TaskFormProps {
  onCreate: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      onCreate(title);
      setTitle("");
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-full text-lg"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-4 sm:mx-6 lg:mx-auto">
          <h2 className="text-lg font-bold mb-4">Nueva Tarea</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título de la tarea"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-2 w-full border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-between space-x-2">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded flex-1"
              >
                Crear
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 bg-gray-500 text-white rounded flex-1"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default TaskForm;
