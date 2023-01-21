import React, { useState } from 'react'
import './JuegoApp.css'
import papel from '../assets/Papel.png'
import piedra from '../assets/Piedra.png'
import tijera from '../assets/Tijera.png'
export const JuegoApp = () => {

    const opciones = ["piedra", "papel", "tijera"]

    const [FinJuego, setFinJuego] = useState(false)
    const [PuntosJugador, setPuntosJugador] = useState(0)
    const [PuntosComputadora, setPuntosComputadora] = useState(0)
    const [jugadorOpcion, setJuegadorOpcion] = useState(null)
    const [computadorOpcion, setComputadorOpcion] = useState(null)
    const [resultado, setResultado] = useState(null)
    const [vidasJugador, setVidasJugador] = useState(['💖', '💖', '💖'])
    const [vidasComputador, setVidasComputador] = useState(['💖', '💖', '💖'])



    const onOpcionCheck = (opcion) => {

        //actualizamos la seleccion del jugador
        setJuegadorOpcion(opcion)
     
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
            validaGanador()
        } else {
            setResultado("Perdiste")
            vidasJugador[PuntosJugador] = "💔"
            console.log(vidasComputador)
            setVidasJugador(vidasJugador)

            setPuntosJugador(PuntosJugador + 1)
            validaGanador()
        }
        




    }


    const onReiniciar = () => {
        setVidasJugador(['💖', '💖', '💖'])
        setVidasComputador(['💖', '💖', '💖'])
        setPuntosJugador(0)
        setPuntosComputadora(0)
        setJuegadorOpcion(null)
        setComputadorOpcion(null)
        setResultado(null)
        setFinJuego(false)
    }


    const validaGanador = () => {

        if (vidasJugador.filter((item) => item == "💔").length === 3) {
            alert('Fin del juego')
            setResultado("Gana Computadora")
            setFinJuego(true)
        } else if (vidasComputador.filter((item) => item == "💔").length === 3) {
            alert('Fin del juego')
            setResultado("Gana Jugador")
            setFinJuego(true)
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
                <h1>JUGUEMOS PIEDRA, PAPEL, O TIJERA</h1>
                <h3>Selecciona una opcion</h3>
                <div className="contenedor-opciones">

                    <div className={`item animate__animated animate__bounce ${FinJuego ? 'btn-enabled' : ''}`} onClick={() => onOpcionCheck("piedra")}>
                        <p>Piedra</p>
                        <img src={piedra} alt="PIEDRA" width="90" />
                    </div>


                    <div className={`item animate__animated animate__bounce ${FinJuego ? 'btn-enabled' : ''}`} onClick={() => onOpcionCheck("papel")}>
                        <p>PAPEL</p>
                        <img src={papel} alt="PAPEL" width="90" />
                    </div>



                    <div className={`item animate__animated animate__bounce ${FinJuego ? 'btn-enabled' : ''}`} onClick={() => onOpcionCheck("tijera")}>
                        <p>TIJERA</p>
                        <img src={tijera} alt="TIJERA" width="90" />
                    </div>

                </div>

                {
                    !FinJuego &&

                    <>
                        <div className="contendor-resultado">
                            <div className={`animate__animated animate__fadeIn ${jugadorOpcion ? 'visible' : 'hidden'}`}>
                                <h3>Seleccionaste: {jugadorOpcion}</h3>
                            </div>
                            <div className={`animate__animated animate__fadeIn ${computadorOpcion ? 'visible' : 'hidden'}`}>
                                <h3>La computadora eligio: {computadorOpcion}</h3>
                            </div>
                        </div>
                        <div className={` resultado ${resultado ? 'visible' : 'hidden'}`}>
                            <h2>Resultado</h2>
                            <div >{resultado}</div>
                        </div>

                    </>
                }


                {

                    FinJuego &&
                    <>

                        <button className="btn" onClick={onReiniciar}>REINICIAR</button>
                        <div className={`${resultado ? 'visible' : 'hidden'}`}>{resultado}</div>
                    </>

                }

            </div>
        </>
    )
}
