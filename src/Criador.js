import React from 'react';
import './Criador.css';

function Criador() {
  return (
    <div className="criador-container">
      <div className="criador-content">
        <div className="criador-imagem">
          <img src="https://i.pinimg.com/564x/a7/3b/29/a73b295690138bb4242108ba8fb509fb.jpg" alt="Cauã Luiz" />
        </div>
        <div className="criador-texto">
          <h1 className="criador-nome">Cauã Luiz</h1>
          <p className="criador-descricao">
            "Sempre fui apaixonado pelo xadrez. Com o enorme número de possibilidades dentro do tabuleiro, pode-se dizer que ele é um universo dentro do nosso, 
            uma realidade contida em outra. Em muitos momentos, eu acreditava que o universo do xadrez era violento, complexo e simplesmente além da minha capacidade 
            de compreensão. Mas, em outros momentos, olhei para esse universo composto por um tabuleiro e 32 peças e vi um abrigo, um refúgio, um lugar com um objetivo que, 
            na verdade, soa surpreendentemente simples." - Cauã Luiz
            
          </p>
          <a href="https://www.chess.com/member/srloki1" target="_blank" rel="noopener noreferrer" className="criador-link">
            Aceita uma partida?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Criador;
