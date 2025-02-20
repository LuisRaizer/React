import React from 'react';

const Loja = ({ contador, setContador, items, setItems }) => {

    const comprarItem = (id, price) => {
        if (contador >= price) {
            setContador(contador - price);
            setItems(items.filter(item => item.id !== id));
        } else {
            alert("Você não tem pontos suficientes para comprar este item.");
        }
    };

    return (
        <div>
            <h1>Loja</h1>
            <div>
                <h2>Itens Disponíveis</h2>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => comprarItem(item.id, item.price)}>Comprar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Loja;