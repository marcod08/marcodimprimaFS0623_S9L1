const Button = (props) => {
    return <button type="button" onClick={()=> alert(`Sono il bottone ${props.name} `)}> Clikkami</button>
}

export default Button