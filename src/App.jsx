import profile from './img/profile.jpg';
import './App.css';

import Frame from './components/Frame';
import Boids from './components/Boids';
import ClickCard from './components/ClickCard';
import LevelBar from './components/LevelBar';
import ReactionDiffusion from './img/react-difuse.mp4'
import { useEffect, useState } from 'react';

import { MdDarkMode, MdLightMode } from 'react-icons/md'
function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : true);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    if (theme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  return (
    <div className={`app`} >
      {!theme ? <MdDarkMode className='theme-btn' tabIndex={0} onClick={() => setTheme(true)} /> : <MdLightMode className='theme-btn' tabIndex={0} onClick={() => setTheme(false)} />}
      <Frame className='container' title='Vinícius Leles Feitosa'>
        <>
          <div className='profile-pic'>
            <img src={profile} alt="" />
          </div>

          <div className='about-text'>
            <h2>Sobre mim</h2>
            <br />
            <p>Sou apaixonado pela arte e pela computação, sempre me encaixei melhor no mercado de desenvolvimento frontend, mas isso nunca me impediu de aprender, tenho experiencia com front e backend igualmente. Penso que a web representa a democratização do software e nunca foi tão fácil e divertido programar.
            </p><br />
            <p>Neste currículo apresento minhas habilidades e também os projetos que mais gostei de fazer.</p>
          </div>

        </>
      </Frame>

      <Frame className='container' title='Habilidades'>
        <ClickCard
          collapse
          header={
            <>
              <h2>Programação</h2>
              <LevelBar level={13}></LevelBar>
            </>
          }
          body={

            <p>Conhecimento de conceitos fundamentais e avançados de estruturas de dados, análise de algoritmos e matemática para computação.</p>

          }
        />
        <ClickCard
          collapse
          header={
            <>
              <h2>Frontend</h2>
              <LevelBar level={16}></LevelBar>
            </>
          }
          body={

            <p>Conhecimento pleno em HTML, CSS, Bootstrap, Javascript e React. Noções de Angular.</p>

          }
        />
        <ClickCard
          collapse
          header={
            <>
              <h2>Backend</h2>
              <LevelBar level={8}></LevelBar>
            </>
          }
          body={

            <p>Experiencia com banco de dados Relacionais (php e mySql), e não relacionais (firebase firestore). Desenvolvimento de APIs com Firebase cloud functions e php, noções de express.js e MongoDb.</p>
          }
        />
        <ClickCard
          collapse
          header={
            <>
              <h2>Projeto de Software</h2>
              <LevelBar level={8}></LevelBar>
            </>
          }
          body={
            <p>Conhecimento de metodologias ágeis, modelos de ciclo de vida e de projetos de software. Noções de engenharia de software e experiência com desenvolvimento em equipe e versionamento de código (Git).</p>
          }
        />
      </Frame>

      <Frame className='container' title='Educação'>
        <div>

          <h3>MÉDIO  |  2017  |  AGOSTINIANO N. S. DE FÁTIMA</h3><br />
          <h3>TÉCNICO  |  2014 - 2016 (300HRS)  |  MCTECH –  CURSO DE DESENVOLVIMENTO WEB</h3><br />
          <h3>SUPERIOR  |  (CURSANDO)  |  UNIVERSIDADE FEDERAL DE GOIÁS – CIÊNCIA DA COMPUTAÇÃO</h3><br />
        </div>
      </Frame>

      <Frame className='container' title='Experiência'>
        <div>

          <h3>Projetos pessoais e universitários em Web e C, no meu <a href="https://github.com/lelesf99" target="_blank" rel="noreferrer">Github</a>.</h3><br />
          <h3><strong>ESTAGIÁRIO  |  CGE  | 2020 - ATUAL</strong> Estágio na Controladoria Geral do Estado de Goiás, trabalhando na equipe de TI como desenvolvedor web full-stack de hotsites, e manutenção dos sites da CGE e do Portal da Transparência de Goiás (HTML, CSS, Javascript, php, mySql e Joomla).</h3><br />
        </div>
      </Frame>

      <div className='container'>
        <h2>Alguns dos meus projetos favoritos:</h2>
      </div>

      <Frame className='container' title='Boids'>
        <Boids></Boids>
        <div className='boids-text'>
          <h2>Algoritmo de Boids por <a href="https://www.red3d.com/cwr/index.html">Craig Reynolds</a></h2><br />
          <p>Inspirado pelos vídeos de <a href="https://www.youtube.com/watch?v=bqtqltqcQhw" target="_blank" rel="noreferrer">Sebastian Lague</a>, e <a href="https://www.youtube.com/watch?v=mhjuuHl6qHM&t" target="_blank" rel="noreferrer">Daniel Shiffman</a>, implementei minha versão, utilizando os métodos de renderização do <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank" rel="noreferrer">Canvas API</a>.</p><br />
          <p>Otimizei a implementação com o método quadtree e fazendo com que cada entidade busque um numero fixo de vizinhos, se a entidade está azul. ela está procurando mais vizinhos, se estiver vermelha, o contrário.</p><br />
          <p>Você pode clicar e segurar para elas seguirem om objetivo.</p>
        </div>
      </Frame>
      <Frame className='container' title='Reação-difusão'>
        <div className='boids-text'>
          <h2><a href="https://pt.wikipedia.org/wiki/Modelo_de_Rea%C3%A7%C3%A3o-Difus%C3%A3o" target="_blank" rel="noreferrer">Modelo de Reação-Difusão</a></h2><br />
          <p>Novamente, inspirado no vídeo de <a href="https://www.youtube.com/watch?v=BV9ny785UNc&t" target="_blank" rel="noreferrer">Daniel Shiffman</a>. Seguindo a implementação de <a href="http://karlsims.com/rd.html" target="_blank" rel="noreferrer">Karl Sims</a> e os trabalhos de <a href="http://mrob.com/pub/comp/xmorphia/" target="_blank" rel="noreferrer">Gray-Scott</a>, fiz primeiro uma versão utilizando a <a href="https://lelesf99.github.io/ReactDiffusion/ReactDiffuseCPU/index.html" target="_blank" rel="noreferrer">Canvas API</a>.</p><br />
          <p>Pesquisando sobre WebGL, implementei <a href="https://lelesf99.github.io/ReactDiffusion/ReactDiffuseGPU/index.html" target="_blank" rel="noreferrer">o mesmo algoritmo utilizando WebGL</a>, aplicando as pesadas formulas de convolução na GPU, melhorando drastiacamente a performance.</p>
        </div>
        <video preload='none' width="100%" autoPlay muted loop>
          <source src={ReactionDiffusion} type="video/mp4" />
        </video>
      </Frame>

    </div >

  );
}

export default App;
