import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import PopUp from "./components/PopUp";

function App() {

  // Obtiene lo que haya en el localStorage
  const [pacientes, setPacientes] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({})

  const [confirmar, setConfirmar] = useState(false)
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false)
  const [id, setId] = useState(null)

  // Guarda los cambios en localStorage cuando el estado de pacientes cambia
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  
  // Según si aceptas eliminar se ejecuta este código, si cambia confirmar a true
  useEffect(() => {
    if (confirmar) {
      eliminarPaciente(id)
      setConfirmar(false)
    }
  }, [confirmar])
  
  useEffect(() => {
    const body = document.querySelector('body')
    if (mostrarConfirmar) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [mostrarConfirmar])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className={`container mx-auto mt-10`}>
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          confirmar={confirmar}
          setMostrarConfirmar={setMostrarConfirmar}
          setConfirmar={setConfirmar}
          setId={setId}
        />
      </div>

      {/* Modal para confirmar o cancelar la eliminación del paciente */}
      <PopUp
        estado={mostrarConfirmar}
        setEstado={setMostrarConfirmar}
        titulo="No hay titulo"
        mostrarHeader={false}
        mostrarOverlay={true}
        mostrarButton={false}
      >
        <p className="text-xl mt-3 mb-7 text-red-700 font-bold">Desea eliminar este Paciente?</p>

        <div className="w-full flex justify-end gap-3">
          <button
            className="py-2 px-10 border bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold uppercase rounded-lg"
            onClick={() => {
              setConfirmar(false)
              setMostrarConfirmar(!mostrarConfirmar)
            }}
          >Cancelar</button>
          <button
            className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={() => {
              setConfirmar(true)
              setMostrarConfirmar(!mostrarConfirmar)
            }}
          >Aceptar</button>
        </div>
      </PopUp>
    </div>
  )
}

export default App;
