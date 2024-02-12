import PropTypes from 'prop-types'

const Error = ({ children }) => {

  // console.log(children);

  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {children}
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.object
}

export default Error;