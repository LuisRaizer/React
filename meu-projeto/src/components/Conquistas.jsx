import React from 'react';

const Conquistas = ({ conquistas }) => {
    return (
        <div className='conquistas'>
            <h1>Conquistas</h1>
            <ul>
                {conquistas.map(conquista => (
                    <li key={conquista.id} className={`conquista-item ${conquista.achieved ? 'achieved' : ''}`}>
                        {conquista.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Conquistas;