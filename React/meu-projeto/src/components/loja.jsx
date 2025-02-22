import React from 'react';

const Loja = ({ contador, setContador, items, setItems, setIncremento }) => {

    const comprarItem = (id, price, incremento) => {
        if (contador >= price) {
            setContador(contador - price);
            setIncremento(prevIncremento => prevIncremento + incremento);
            setItems(items.filter(item => item.id !== id));
        } else {
            alert("Você não tem pontos suficientes para comprar este item.");
        }
    };

    return (
        <div className="loja">
            <h1 className="loja-title">Loja</h1>
            <div className="loja-content">
                <h2 className="loja-subtitle">Itens Disponíveis</h2>
                <ul className="loja-items">
                    {items.map(item => (
                        <li key={item.id} className="loja-item">
                            <span className="item-name">{item.name}</span> - <span className="item-price">Pontos: {item.price}</span>
                            <button className="comprar-button" onClick={() => comprarItem(item.id, item.price, item.incremento)}>Comprar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Loja;