import React, { useState, useEffect } from 'react'
import './JuegoApp.css'
export const JuegoApp = () => {

    const opciones = ["piedra", "papel", "tijera"]
    const vidas = []

    const [PartidaActual, setPartidaActual] = useState(0)
    const [PuntosJugador, setPuntosJugador] = useState(0)
    const [PuntosComputadora, setPuntosComputadora] = useState(0)
    const [jugadorOpcion, setJuegadorOpcion] = useState(null)
    const [computadorOpcion, setComputadorOpcion] = useState(null)
    const [resultado, setResultado] = useState(null)
    const [vidasJugador, setVidasJugador] = useState(['💖', '💖', '💖'])
    const [vidasComputador, setVidasComputador] = useState(['💖', '💖', '💖'])



    const onOpcionCheck = (opcion) => {
        if (PartidaActual != 4) {
            //actualizamos la seleccion del jugador
            setJuegadorOpcion(opcion)
setPartidaActual(PartidaActual + 1)
            //Generamos aleatoriamente una Opcion para la  computadora
            const randomOpcionCompuradora = Math.floor(Math.random() * 3)
            //Pasamos la opcion 
            const opcionComputadora = opciones[randomOpcionCompuradora]
            //actualizamos el estado de la computadora
            setComputadorOpcion(opcionComputadora)

            //Validamos el juego actual
            if (opcion === opcionComputadora) {
                setResultado("Empate")
            } else if ((opcion === "piedra" && opcionComputadora === "tijera")
                || (opcion === "papel" && opcionComputadora === "piedra")
                || (opcion === "tijera" && opcionComputadora === "papel")) {
                setResultado("Ganaste")
                vidasComputador[PuntosComputadora] = "💔"
                console.log(vidasComputador)
                setVidasComputador(vidasComputador)

                setPuntosComputadora(PuntosComputadora + 1)
            } else {
                setResultado("Perdiste")
                vidasJugador[PuntosJugador] = "💔"
                console.log(vidasComputador)
                setVidasJugador(vidasJugador)

                setPuntosJugador(PuntosJugador + 1)
            }
            setPartidaActual(PartidaActual + 1)
           

        } else {
            validaGanador()
        }
        
    }




    const validaGanador = () => {

        if (vidasJugador.filter((item) => item == "💔").length < vidasComputador.filter((item) => item == "💔").length ) {
            alert('Gana Jugador')
        } else if (vidasJugador.filter((item) => item == "💔").length == vidasComputador.filter((item) => item == "💔").length ) {
            alert('Empate')
        } else {
            alert('Gana Computador')
        }

    }

    return (
        <>
            <div className="contenedor">
                <div className="contenedor-vidas__colum">
                    <div>
                        <h3>Vidas Jugador:</h3>
                    </div>
                    <div>
                        {vidasJugador.map((item, index) => {
                            return <span key={index}>{item}</span>
                        })}
                    </div>

                </div>
                <div className="contenedor-vidas__colum">
                    <div>
                        <h3>Vidas Computadora:</h3>
                    </div>
                    <div>
                        {vidasComputador.map((item, index) => {
                            return <span key={index}>{item}</span>
                        })}
                    </div>
                </div>
            </div>
            <div>
                <h1>JUEGUEMOS PIEDRA, PAPEL, O TIJERA</h1>
                <div>
                    <button onClick={() => onOpcionCheck("piedra")}>PIEDRA</button>
                </div>
                <div>
                    <button onClick={() => onOpcionCheck("papel")}>PAPEL</button>
                </div>
                <div>
                    <button onClick={() => onOpcionCheck("tijera")}>TIJERA</button>
                </div>
                <h2>Resultado</h2>
                <h3>Seleccionaste: {jugadorOpcion}</h3>
                <h3>La computadora eligio: {computadorOpcion}</h3>
                <p>{resultado}</p>
            </div>
        </>
    )
}
