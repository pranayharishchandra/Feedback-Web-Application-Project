import PropTypes from 'prop-types'


function Header ({text, bgColor, textColor}) {
    /**styling through js  */
    const headerStyle = {
        backgroundColor: bgColor, 
        color: textColor,
    }
    return (
        <header style={headerStyle} >
            {text}
        </header>
    )
}



Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: 'pink',
    // textColor: '#ff6a95',
}
Header.propTypes = {          // p is small of propTypes
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}


export default Header;
