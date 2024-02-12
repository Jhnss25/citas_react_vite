import Paciente from "./Paciente"
import PropTypes from 'prop-types'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente, setMostrarConfirmar, setId }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length
                ? (<>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes </h2>

                    <p className="text-xl mt-5 text-center mb-10">
                        Administra tus {""}
                        <span className="text-indigo-700 font-bold">Pacientes</span>
                    </p>

                    <div className="h-4/5 md:overflow-y-scroll">
                        {pacientes && pacientes.map((paciente) => {
                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    pacientes={pacientes}
                                    eliminarPaciente={eliminarPaciente}
                                    setMostrarConfirmar={setMostrarConfirmar}
                                    setId={setId}
                                />
                            );
                        })}
                    </div>
                </>)
                : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

                        <p className="text-xl mt-5 text-center mb-10">
                            Comienza agregando pacientes  {""}
                            <span className="text-indigo-700 font-bold">y aparecerán en este Lugar</span>
                        </p>
                    </>
                )
            }
        </div>
    );
}

ListadoPacientes.propTypes = {
    pacientes: PropTypes.array,
    setPaciente: PropTypes.func.isRequired,
    eliminarPaciente: PropTypes.func,
    setMostrarConfirmar: PropTypes.func,
    setId: PropTypes.func
}

export default ListadoPacientes