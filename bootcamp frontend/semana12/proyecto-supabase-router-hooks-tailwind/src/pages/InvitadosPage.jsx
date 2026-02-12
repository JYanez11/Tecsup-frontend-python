import { useEffect, useState } from "react";

import { fetchInvitados, createInvitados, updateInvitado, deleteInvitado } from "../services/Invitados";

const InvitadosPage = () => {
  const [Invitados, setInvitados] = useState([]);

  const [newInvitadoName, setNewInvitadoName] = useState("");

  useEffect(() => {
    fetchInvitados().then((data) => {
        if(data) setInvitados(data);
    });
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newInvitadoName.trim()) return;

    try {
      const data = await createInvitados({ name: newInvitadoName });
      if (data) {
        setInvitados([...Invitados, ...data]); 
        setNewInvitadoName(""); 
      }
    } catch (error) {
      alert("Error al crear");
    }
  };

  // 3. DEFINE handleDelete
  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este registro?")) {
      try {
        await deleteInvitado(id);
        setInvitados(Invitados.filter((m) => m.id !== id));
      } catch (error) {
        alert("Error al eliminar");
      }
    }
  };

  // 4. DEFINE handleUpdate
  const handleUpdate = async (id, currentName) => {
    const nuevoNombre = window.prompt("Editar nombre:", currentName);
    if (nuevoNombre && nuevoNombre !== currentName) {
      try {
        await updateInvitado(id, { name: nuevoNombre });
        setInvitados(Invitados.map(m => m.id === id ? { ...m, name: nuevoNombre } : m));
      } catch (error) {
        alert("Error al actualizar");
      }
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl mb-4 font-bold">Lista de invitados a la fiesta de año nuevo</h1>

      <form onSubmit={handleCreate} className="flex gap-2 mb-8">
        <input
          type="text"
          value={newInvitadoName}
          onChange={(e) => setNewInvitadoName(e.target.value)}
          placeholder="invitado..."
          className="flex-1 border p-2 rounded shadow-sm"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Agregar
        </button>
      </form>

      <ul className="space-y-3">
        {Invitados.map((Invitado) => (
          <li key={Invitado.id} className="flex justify-between items-center p-3 bg-white border rounded shadow-sm">
            <span className="text-lg">{Invitado.name}</span>
            
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(Invitado.id, Invitado.name)}
                className="text-blue-500 hover:text-blue-700"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(Invitado.id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvitadosPage;