import React from 'react';
import './Historia.css';

function Historia() {
  return (
    <div className="historia-container">
      <main>
        <section className="intro-section">
          <h1>História do Xadrez</h1>
          <p>
            O xadrez é um dos jogos mais antigos e populares do mundo, com uma rica
            história que remonta a mais de 1500 anos. Originado na Índia, o jogo se
            espalhou pelo mundo e evoluiu até a forma que conhecemos hoje.
          </p>
        </section>

        <section className="timeline-section">
          <h2>Linha do Tempo</h2>
          <ul className="timeline">
            <li><strong>600 d.C.</strong>: Surgimento do jogo precursor na Índia (Chaturanga).</li>
            <li><strong>1450</strong>: Regras modernas do xadrez começaram a ser implementadas.</li>
            <li><strong>1886</strong>: Primeiro Campeonato Mundial de Xadrez.</li>
            <li><strong>1997</strong>: O supercomputador Deep Blue vence Garry Kasparov.</li>
            <li><strong>2024</strong>: O xadrez online se torna uma febre, com milhões de jogadores.</li>
          </ul>
        </section>

        <section className="players-section">
          <h2>Grandes Mestres</h2>
          <ul>
            <li><strong>Bobby Fischer</strong>: Um dos maiores enxadristas, campeão em 1972.</li>
            <li><strong>Garry Kasparov</strong>: Campeão por 15 anos consecutivos (1985-2000).</li>
            <li><strong>Magnus Carlsen</strong>: Campeão desde 2013, famoso por sua visão tática.</li>
            <li><strong>Judith Polgar</strong>: Considerada a maior enxadrista feminina da história.</li>
          </ul>
        </section>

        <section className="curiosities-section">
          <h2>Curiosidades</h2>
          <ul>
            <li>"Cheque-mate" vem do persa "Shah Mat", que significa "O rei está morto".</li>
            <li>O jogo de xadrez mais longo possível pode ter até 5.949 movimentos.</li>
            <li>A Rússia produziu mais campeões mundiais de xadrez do que qualquer outro país.</li>
          </ul>
        </section>

        <section className="impact-section">
          <h2>Impacto Cultural</h2>
          <p>
            O xadrez sempre foi visto como um jogo intelectual e estratégico. Ele tem 
            sido utilizado como uma ferramenta educacional para desenvolver o pensamento
            crítico e a tomada de decisões. Desde a sua inclusão em filmes, séries e 
            competições globais, o xadrez se mantém como um jogo culturalmente relevante.
          </p>
        </section>
      </main>

      <footer>
        <p>Desenvolvido por: Cauã Luiz</p>
      </footer>
    </div>
  );
}

export default Historia;

