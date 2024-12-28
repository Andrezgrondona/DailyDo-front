import React, { useState } from "react";

interface TaskCardProps {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
  onToggleCompleted: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  completed,
  createdAt,
  onDelete,
  onToggleCompleted,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    onEdit(id, newTitle);
    setIsEditing(false); 
  };

  const Modal = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-lg font-bold mb-4">Editar Tarea</h2>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          autoFocus 
        />
        <div className="flex justify-between">
          <button
            onClick={handleEdit}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Guardar
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-white bg-gray-500 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className={`p-4 rounded-lg shadow-md mb-4 border border-gray-300 ${
        completed ? "bg-green-100" : "bg-red-400"
      }`}
    >
      <h3 className="text-xl">{title}</h3>
      <p className="text-sm text-gray-600">
        Creada el {new Date(createdAt).toLocaleDateString()}
      </p>
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={() => onToggleCompleted(id)}
          className={`px-4 py-2 text-white ${
            completed ? "bg-green-500" : "bg-yellow-500"
          } rounded`}
        >
          {completed ? "Completada" : "Pendiente"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 text-gray-700 border border-gray-700 rounded"
          >
          Eliminar
        </button>

        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 text-gray-700 border border-gray-700 rounded"
        >
          Editar
        </button>
      </div>

      {isEditing && <Modal />}
    </div>
  );
};

export default TaskCard;
