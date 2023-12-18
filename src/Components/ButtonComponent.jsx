import { Component } from "react";

class ButtonComponent extends Component {
    render () {
        const { name } = this.props
        return <button type="button" onClick={()=> alert(`sono il buttone ${name}`)}>Clikkami ancora</button>
    }
}

export default ButtonComponent