import { useState } from "react";
import styles from './Formulario.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultado = () => {
        const imc = peso / (altura * altura)

        if (imc < 17) {
            return (
                <p>IMC {imc.toFixed(2)}: Muito abaixo do peso</p>
            )
        } else if (imc >= 17 && imc <= 18.49) {
            return (
                <p>IMC {imc.toFixed(2)}: Abaixo do peso</p>
            )
        }
        else if (imc >= 18, 50 && imc <= 24.99) {
            return (
                <p>IMC {imc.toFixed(2)}: Peso normal</p>
            )
        } else if (imc >= 25 && imc <= 29.99) {
            return (
                <p>IMC {imc.toFixed(2)}: Acima do peso</p>
            )
        } else if (imc >= 30 && imc <= 34.99) {
            return (
                <p>IMC {imc.toFixed(2)}: Obesidade I</p>
            )
        } else if (imc >= 35 && imc <= 39.99) {
            return (
                <p>IMC {imc.toFixed(2)}: Obesidade II (severa)</p>
            )
        } else if (imc >= 40) {
            return (
                <p>IMC {imc.toFixed(2)}: Obesidade III (mórbida)</p>
            )
        }
    }

    return (
        
        <div className="container">
            <form>
                <h1>Calculadora IMC</h1>
                <input type="number" placeholder="Altura (em metros)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                <input type="number" placeholder="Peso (em Kilogramas)" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                {renderizaResultado()}
            </form>
        </div>
    )
}



export default Formulario