import React, {Component} from "react";

export default class Greets extends Component {
state = {
    tipo:"e a saudação",
    nome: "Escreva o nome"
}

constructor(props) {
    super(props)
    this.SetName = this.SetName.bind(this)
}

setTipo(e) {
    this.setState({tipo: e.target.value})
}

SetName(e) {
    this.setState({nome: e.target.value})
}

    render() {
        const {nome, tipo} = this.state
        return(
            <div>
            <h1>{nome}, {tipo}!</h1>
            <hr />
            <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
            <input type="text" placeholder="Nome..." value={nome} onChange={this.SetName} />
            </div>
        )
    }
}