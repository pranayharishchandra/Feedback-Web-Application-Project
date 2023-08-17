import PropTypes from 'prop-types';

function Button({ children, button, type, version, isDisabled}) {


    return (
      <button className={`btn btn-${version}`}
              type={type} 
              disabled={isDisabled}>

          {children}
        
      </button>
    )
}



Button.defaultProps = {
    children   : "",
    version    : 'primary',
    type       : 'button',
    isDisabled : false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}





export default Button;
