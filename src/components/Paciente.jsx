import PropTypes from 'prop-types'
// import { useEffect } from 'react';

const Paciente = ({
    paciente,
    setPaciente,
    // eliminarPaciente,
    setMostrarConfirmar,
    setId
}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        setMostrarConfirmar(true)
        
        setId(id)
    }

    return (
        <div className="bg-white mx-5 my-10 first-of-type:mt-0 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">
                {sintomas}
                </span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                    >
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

Paciente.propTypes = {
    paciente: PropTypes.object.isRequired,
    setPaciente: PropTypes.func.isRequired,
    eliminarPaciente: PropTypes.func,
    setMostrarConfirmar: PropTypes.func,
    setId: PropTypes.func
}

export default Paciente