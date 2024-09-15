const Button = ({ imageUrl , buttonName, clickHandler}) => {
    return (
      <button title={buttonName}>
        <img onClick={clickHandler} src={imageUrl} alt={buttonName} />
      </button>
    )
  }
  
  export default Button
