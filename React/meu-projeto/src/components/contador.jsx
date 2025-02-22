import { useEffect } from "react";
import React from "react";

const Contador = ({ contador, setContador, incremento, setIncremento, autoIncremento, setAutoIncremento }) => {

    useEffect(() => {
        let interval;
        if (autoIncremento) {
            interval = setInterval(() => {
                setContador(prevContador => prevContador + incremento);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [autoIncremento, incremento, setContador]);

    return (
        <div>
            <h1>{contador}</h1>
            <div className="buttons-container">

                <button className="btn1" onClick={() => setContador(contador + incremento)}>Incrementar</button>

                <button onClick={() => {
                    if (contador >= 10) {
                        setIncremento(incremento + 1);
                        setContador(contador - 10);
                    } else {
                        alert("Você precisa ter pelo menos 10 na contagem para aumentar o incremento.");
                    }
                }}
                    disabled={contador < 10}
                >Aumentar Incremento (-10)</button>

                {incremento >= 50 &&
                    <button onClick={() => {
                        if (contador >= 550) {
                            setIncremento(incremento + 25);
                            setContador(contador - 100);
                        } else {
                            alert("Você precisa ter pelo menos 100 na contagem para comprar isso.");
                        }
                    }}>Aumentar Incremento (-100)</button>}

                {incremento >= 1000 &&
                    <button onClick={() => {
                        if (contador >= 1000) {
                            setAutoIncremento(true)
                        } else {
                            alert("Você precisa ter pelo menos 1000 na contagem para ativar o incremento automático.");
                        }

                        if (autoIncremento) {
                            alert("Incremento automático já está ativado.");
                        }
                    }}>Ativar Incremento Automático (-1000)</button>}

                {contador >= 100000 &&
                    <button onClick={() => {
                        if (contador >= 100000) {
                            setIncremento(incremento * 1.5);
                            setContador(0);
                        }
                    }}>AUMENTAR O INCREMENTO</button>}

            </div>
            {autoIncremento && <p>Incrementos por segundo: {incremento}</p>}
        </div>
    );
}

export default Contador;