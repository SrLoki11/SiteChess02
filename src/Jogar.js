import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import './Jogar.css';
import bot from './Imagem/Kanna.jpeg';

function Jogar() {
  const [game, setGame] = useState(new Chess()); // Estado inicial do jogo de xadrez

  // Função que lida com a movimentação das peças
  const onDrop = ({ sourceSquare, targetSquare }) => {
    setGame((prevGame) => {
      const newGame = new Chess(prevGame.fen()); // Cria uma nova instância do jogo a partir do estado anterior
      const piece = newGame.get(sourceSquare); // Verifica se há uma peça na casa de origem

      if (!piece) {
        console.error('Invalid move: No piece at source square');
        return prevGame; // Se não houver peça, retorna o estado anterior
      }

      let move = null;
      // Verifica se o movimento é uma promoção de peão
      if (piece.type === 'p' && (targetSquare[1] === '8' || targetSquare[1] === '1')) {
        move = newGame.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q', // Promove para rainha se for necessário
        });
      } else {
        // Movimento normal sem promoção
        move = newGame.move({
          from: sourceSquare,
          to: targetSquare,
        });
      }

      if (move === null) {
        console.error('Invalid move: Chess.js could not process the move');
        return prevGame; // Se o movimento for inválido, mantém o estado anterior
      }

      return newGame; // Retorna o novo estado do jogo com o movimento aplicado
    });

    return true; // Retorna true se o movimento foi válido
  };

  return (
    <div className="jogar-container">
      <h1 className="jogar-title">Desafie o Penumbra</h1>
      <p className="jogar-text">
        Desafie o Penumbra, teste seus conhecimentos, e prove que se tornou um grande jogador.
      </p>

      <div className="bot-container">
        <img src={bot} alt="Imagem do Bot Penumbra" className="bot-image" />
      </div>

      <div className="chessboard-container">
        <h2>Tabuleiro de Xadrez</h2>
        <div className="chessboard-wrapper">
          <Chessboard
            id="BasicBoard"
            position={game.fen()} // Define a posição atual do jogo
            onPieceDrop={onDrop} // Define a função chamada quando uma peça é solta
          />
        </div>
      </div>
    </div>
  );
}

export default Jogar;
