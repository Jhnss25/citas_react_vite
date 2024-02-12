import PropTypes from 'prop-types'

const PopUp = ({children, estado, setEstado, titulo="Alerta", mostrarHeader=true, mostrarOverlay=true, mostrarButton }) => {
    return (
        <>
            {estado &&
                <div className={`${mostrarOverlay ? 'bg-gray-900/50' : 'bg-transparent'} w-full h-screen fixed top-0 left-0 flex items-center justify-center p-10`}>
                    <div className="w-11/12 max-w-lg bg-white relative rounded-md shadow-lg p-5">
                        {mostrarHeader && <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-200">
                            <h3 className="font-semibold text-xl text-indigo-700">{titulo}</h3>
                        </div>}

                        { mostrarButton && <button 
                            className="absolute top-5 w-7 h-7 right-5 bg-none cursor-pointer transition-all rounded-md text-indigo-600 hover:bg-gray-200"
                            type="button" 
                            onClick={() => setEstado(false)}
                        >
                            <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>}

                        <div className="flex flex-col items-center">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

PopUp.propTypes = {
    children: PropTypes.array,
    estado: PropTypes.bool,
    setEstado: PropTypes.func,
    titulo: PropTypes.string,
    mostrarHeader: PropTypes.bool,
    mostrarOverlay: PropTypes.bool,
    mostrarButton: PropTypes.bool
}

export default PopUp