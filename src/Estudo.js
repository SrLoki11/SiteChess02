import React from 'react';
import './Estudo.css';

function EstudoDirigido() {
  return (
    <div className="estudo-container">
      {/* Estudo Inicial */}
      <div className="estudo-box">
        <h2 className="estudo-title">Estudo Inicial</h2>
        <img src="https://portalhortolandia.com.br/wp-content/uploads/2017/02/xadrez.jpg" alt="Estudo Inicial" className="estudo-image" />
        <p className="estudo-description">
          Esta seção é destinada aos iniciantes no xadrez, com lições básicas e estratégias essenciais para quem está começando.
        </p>
        <button className="estudo-button" onClick={() => window.location.href='/estudo-inicial'}>
          Saiba Mais
        </button>
      </div>

      {/* Estudo Intermediário */}
      <div className="estudo-box">
        <h2 className="estudo-title">Estudo Intermediário</h2>
        <img src="https://xadreztotal.com.br/wp-content/uploads/2013/03/jogar_xadrez.jpg" alt="Estudo Intermediário" className="estudo-image" />
        <p className="estudo-description">
          Ideal para jogadores intermediários, com conceitos avançados, táticas e jogadas para melhorar sua performance.
        </p>
        <button className="estudo-button" onClick={() => window.location.href='/estudo-intermediario'}>
          Saiba Mais
        </button>
      </div>

      {/* Estudo Avançado */}
      <div className="estudo-box">
        <h2 className="estudo-title">Estudo Avançado</h2>
        <img src="https://static.significados.com.br/foto/xadrez-og.jpg?class=ogImageSquare" alt="Estudo Avançado" className="estudo-image" />
        <p className="estudo-description">
          Desafios e conteúdos para jogadores experientes, incluindo análise de partidas e estratégias avançadas.
        </p>
        <button className="estudo-button" onClick={() => window.location.href='/estudo-avancado'}>
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

export default EstudoDirigido;
