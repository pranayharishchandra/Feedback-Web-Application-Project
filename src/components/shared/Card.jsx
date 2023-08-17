

function Card({children, reverse}) {
    // const darkMode = {
    //     backgroundColor : 'rgba(0,0,0,0.6)',
    //     color : 'white'
    // }
  return (
    // <div  className='card' style={reverse && darkMode}>
    // <div  className='card reverse'>
    <div  className= {`card ${reverse && "reverse"}`} >
      {children}
    </div>
  )
}

Card.defaultProp = {
    reverse : false,
}

export default Card;
