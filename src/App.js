import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Criador from './Criador';
import Curiosidades from './Curiosidade';
import Estudo from './Estudo';
import Aprendizado from './Aprendizado';
import Jogar from './Jogar';
import Rei from './Imagem/Rei.png';
import Aprendizadoicon from './Imagem/Aprendizadoicon.png';
import Curiosidadeicon from './Imagem/Curiosidadeicon.png';
import Homeicon from './Imagem/Homeicon.png';
import Jogaricon from './Imagem/Jogaricon.png';
import Estudoicon from './Imagem/Estudoicon.png';



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul className="navbar">
              <li><Link to="/" className="nav-item"><img src={Homeicon} alt="Home" /> Início</Link></li>
              <li><Link to="/aprendizado" className="nav-item"><img src={Aprendizadoicon} alt="Aprendizado" /> Aprendizado</Link></li>
              <li><Link to="/curiosidades" className="nav-item"><img src={Curiosidadeicon} alt="Curiosidades" /> Curiosidades</Link></li>
              <li><Link to="/estudo" className="nav-item"><img src={Estudoicon} alt="Estudo" /> Estudo Dirigido</Link></li>
              <li><Link to="/jogar" className="nav-item"><img src={Jogaricon} alt="Jogar" /> Jogar</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div className="home-page">
                <div className="kings-container">
                  <img src={Rei} alt="Torre Esquerda" className="king-icon" />
                  <h1 className="main-title">PENUMBRA CHESS</h1>
                  <img src={Rei} alt="Torre Esquerda" className="king-icon" />
                </div>
                <p className="description">
                  Conheça o mundo do Xadrez, dê o primeiro passo rumo ao conhecimento, e enfrente o Penumbra
                </p>
              {/* Seção de Notícias */}
              <section className="news-section">
                  <h2>Notícias</h2>
                  <div className="news-container">
                    <div className="news-item">
                      <img src="https://images.chesscomfiles.com/uploads/v1/news/1532465.9e77e0e2.630x354o.14b175c4252c@2x.jpg" alt="Notícia 1" className="news-image" />
                      <p className="news-text"> Shevchenko é expulso do Campeonato Espanhol por Equipes após telefone ser encontrado no banheiro!</p>
                      <button className="news-button"><a href="https://www.chess.com/pt-BR/news/view/kirill-shevchenko-expulso-campeonato-espanhol-equipes" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                    </div>
                    <div className="news-item">
                      <img src="https://images.chesscomfiles.com/uploads/v1/news/1520889.3c0f9d1e.668x375o.8a05d0c533cf.png" alt="Notícia 2" className="news-image" />
                      <p className="news-text">Vitórias contrastantes de Carlsen e Firouzja; Obra-prima de ataque de Vachier-Lagrave</p>
                      <button className="news-button"><a href="https://www.chess.com/pt-BR/news/view/cct-julius-baer-generation-cup-2024-dia-4" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                    </div>
                    <div className="news-item">
                      <img src="https://images.chesscomfiles.com/uploads/v1/news/1518891.8040cda2.668x375o.1cd523bea81a.png" alt="Notícia 3" className="news-image" />
                      <p className="news-text">Índia conquista ouro duplo histórico na Olimpíada.</p>
                      <button className="news-button"><a href="https://www.chess.com/pt-BR/news/view/olimpiada-xadrez-fide-2024-budapeste-india-vence" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                    </div>
                  </div>
                </section>
              </div>
            } />
            <Route path="/curiosidades" element={<Curiosidades />} />
            <Route path="/aprendizado" element={<Aprendizado />} />
            <Route path="/jogar" element={<Jogar />} />
            <Route path="/estudo" element={<Estudo />} />
            <Route path="/criador" element={<Criador />} />
          </Routes>
        </main>

        <footer>
        <p>Desenvolvido por: <Link to="/criador">Cauã Luiz</Link></p>
        <p>Versão 1.7</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
