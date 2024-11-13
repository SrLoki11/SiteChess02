import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import './Jogar.css';
import bot from './Imagem/Bot x Humano.jpg';

function Jogar() {
  const [game, setGame] = useState(new Chess()); // Estado inicial do jogo de xadrez
  const [isGameStarted, setIsGameStarted] = useState(false); // Estado para controle do início da partida

  // Função que lida com a movimentação das peças
  const onDrop = ({ sourceSquare, targetSquare }) => {
    if (!isGameStarted) return false; // Impede movimento se o jogo não foi iniciado

    setGame((prevGame) => {
      const newGame = new Chess(prevGame.fen());
      const piece = newGame.get(sourceSquare);

      if (!piece) {
        console.error('Invalid move: No piece at source square');
        return prevGame;
      }

      let move = null;
      if (piece.type === 'p' && (targetSquare[1] === '8' || targetSquare[1] === '1')) {
        move = newGame.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q',
        });
      } else {
        move = newGame.move({
          from: sourceSquare,
          to: targetSquare,
        });
      }

      if (move === null) {
        console.error('Invalid move: Chess.js could not process the move');
        return prevGame;
      }

      // Atualiza o estado do jogo após o movimento do jogador
      setTimeout(makeBotMove, 500); // Chama o movimento do bot após 500ms
      return newGame;
    });

    return true;
  };

  // Função para o movimento do bot (movimento aleatório)
  const makeBotMove = () => {
    setGame((prevGame) => {
      const newGame = new Chess(prevGame.fen());
      const moves = newGame.moves();
      if (moves.length > 0) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        newGame.move(randomMove); // Realiza o movimento aleatório
      }
      return newGame;
    });
  };

  // Função para iniciar uma nova partida
  const startGame = () => {
    setGame(new Chess()); // Reseta o tabuleiro para uma nova partida
    setIsGameStarted(true);
  };

  // Função para reiniciar o jogo
  const restartGame = () => {
    setGame(new Chess());
    setIsGameStarted(false);
  };

  return (
    <div className="jogar-container">
      <h1 className="jogar-title">Desafie o Penumbra</h1>
      <p className="jogar-text">
        Desafie o Penumbra, teste seus conhecimentos e prove que se tornou um grande jogador.
      </p>

      <div className="bot-container">
        <img src={bot} alt="Imagem do Bot Penumbra" className="bot-image" />
      </div>

      <div className="chessboard-container">
        <div className="chessboard-wrapper">
          <Chessboard
            id="BasicBoard"
            position={game.fen()}
            onPieceDrop={onDrop}
          />
          <div className="button-container">
            <button onClick={startGame} className="game-button">Start</button>
            <button onClick={restartGame} className="game-button">Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jogar;
