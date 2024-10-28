import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-page">
      <div className="kings-container">
        <img src="/img/Rei.png" alt="Rei Esquerda" className="king-icon" />
        <h1 className="main-title">PENUMBRA CHESS</h1>
        <img src="/img/Rei.png" alt="Rei Direita" className="king-icon" />
      </div>
      <p className="description">
        Conheça o mundo do Xadrez, dê o primeiro passo rumo ao conhecimento, e enfrente o Penumbra
      </p>
    </div>
  );
}

export default Home;
