import React from "react";

const BoaTarde = props => <h1>Boa tarde, {props.name}!</h1>
const BoaNoite = props => <h2>Boa noite. {props.name}</h2>
const BomDia = props => <div>Bom dia, {props.name}</div>

export default {BoaTarde, BoaNoite, BomDia}
export {BoaTarde, BoaNoite}