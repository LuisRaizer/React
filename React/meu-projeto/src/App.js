import './components/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header';
import Conquistas from './components/Conquistas';
import Contador from './components/contador';
import Loja from './components/loja';

function App() {
  const [contador, setContador] = useState(0);
  const [incremento, setIncremento] = useState(1);
  const [autoIncremento, setAutoIncremento] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'Bonus 500 Incrementos por clique', price: 100, incremento: 500 },
    { id: 2, name: 'Bonus 2000 Incrementos por segundo', price: 50000, incremento: 2000 },
    { id: 3, name: 'Bonus 500000 Incrementos por segundo', price: 102000, incremento: 500000 },
  ]);
  const [conquistas, setConquistas] = useState([
    { id: 1, name: '100 Pontos', condition: (contador) => contador >= 100, achieved: false },
    { id: 2, name: '10000 Pontos', condition: (contador) => contador >= 10000, achieved: false },
    { id: 3, name: '100000 Pontos', condition: (contador) => contador >= 1000000, achieved: false },
  ]);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  useEffect(() => {
    setConquistas(conquistas.map(conquista =>
      conquista.condition(contador) ? { ...conquista, achieved: true } : conquista
    ));
  }, [contador]);

  useEffect(() => {
    if (conquistas.every(conquista => conquista.achieved)) {
      setFimDeJogo(true);
    }
  }, [conquistas]);

  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <h1>Clicker Incremental</h1>
        {fimDeJogo && <h2>Parabéns por cumprir a última conquista. Fim de Jogo! <small>Caso queira, tente chegar ao <code>infinity</code></small></h2>}
        <Routes>
          <Route path="/" element={<Contador contador={contador} setContador={setContador} incremento={incremento} setIncremento={setIncremento} autoIncremento={autoIncremento} setAutoIncremento={setAutoIncremento} />} />
          <Route path="/Lojinha" element={<Loja contador={contador} setContador={setContador} items={items} setItems={setItems} setIncremento={setIncremento} />} />
          <Route path="/Conquistas" element={<Conquistas conquistas={conquistas} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;