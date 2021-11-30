import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, width }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, minWidth: width }}
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    width: '200'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button