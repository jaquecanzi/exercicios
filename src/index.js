import React from 'react';
import ReactDom from 'react-dom';

import Greets from './components/Greets';

/*import First from './components/First'*/
//import HelloWorld from './components/HelloWorld'

/*ReactDom.render(<First />, document.getElementById('root'))*/

//ReactDom.render(<HelloWorld name = "Jaqueline"  idade = {22}/>, document.getElementById('root'))

/* import Multi, { BoaNoite } from './components/Multiples';

ReactDom.render(
    <div>
        <Multi.BoaTarde name = "Jaqueline" />
        <BoaNoite name="Antonio" />
        <Multi.BomDia name = "Alice"></Multi.BomDia>
    </div>,
document.getElementById('root')) */

ReactDom.render(
    <div>
        <Greets tipo="Olá!" name ="Alice!"/>
    </div>,
    document.getElementById('root')
)