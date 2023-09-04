import profile from './img/profile.jpg';
import './App.css';

import Frame from './components/Frame';
import Boids from './components/Boids';
import ClickCard from './components/ClickCard';
import LevelBar from './components/LevelBar';
import ActionCenter from './components/ActionCenter';
import ReactionDiffusion from './img/react-difuse.mp4';
import { useEffect, useState, useRef } from 'react';
import { mockData } from './mockData';
function App() {

  const appRef = useRef();

  const [scroll, setScroll] = useState(0);
  const [text, setText] = useState(mockData.pt_BR);

  const toggleLang = (bool) => bool ? setText(mockData.pt_BR) : setText(mockData.en_US);

  useEffect(() => {
    const ref = appRef;
    const listener = ref.current.addEventListener('scroll', (e) => setScroll(e.target.scrollTop), {
      capture: true,
      passive: true
    });
    return () => {
      ref.current.removeEventListener('scroll', listener);
    }
  }, []);

  return (
    <div className={`app`} ref={appRef}>
      <ActionCenter toggleLang={toggleLang} data={text}></ActionCenter>
      <Frame className='container' title={text.about.frame_title}>
        <>
          <div className='profile-pic'>
            <img src={profile} alt="" />
          </div>

          <div className='about-text'>
            <h2>{text.about.title}</h2>
            {text.about.description.map((p, index) => {
              return <div className='line' key={index}>{p} </div>
            })}
          </div>
        </>
      </Frame>
      <Frame className='container' title={text.skills.frame_title} noOutline={true} tooltip={text.code === 1
        ? <p>As barras são apenas uma representação abstrata e visual do que eu considero que tenho mais experiência.</p>
        : <p>The bars are just an abstract and visual representation of what I consider to have more experience.</p>}>
        {text.skills.cards.map((card, index) => {
          return <ClickCard
            key={index}
            collapse
            header={
              <>
                <h2>{card.name}</h2>
                <LevelBar scroll={scroll} level={card.level}></LevelBar>
              </>
            }
            body={
              <ul>
                {card.description.map((p, index) => {
                  return <li key={index}>{p}</li>
                })}
              </ul>
            }
          />
        })}
      </Frame>

      <Frame className='container' title={text.edu.frame_title}>
        <div>
          {text.edu.description.map((p, index) => {
            return <h3 key={index} className='line'>{p}</h3>
          })}
        </div>
      </Frame>

      <Frame className='container' title={text.exp.frame_title}>
        <div>
          {text.exp.sub_title}
          {text.exp.description.map((h, index) => {
            return <div className='line' key={index}>{h} </div>
          })}
        </div>
      </Frame>

      <div className='container'>
        <h2>{text.projects.description}</h2>
      </div>

      <Frame className='container' title={text.projects.boids.frame_title}>
        <Boids></Boids>
        <div className='project-text'>
          {text.projects.boids.title}
          {text.projects.boids.description.map((p, index) => {
            return <div key={index} className='line'>{p}</div>;
          })}
        </div>
      </Frame>
      <Frame className='container' title={text.projects.reactionDiffusion.frame_title}>
        <div className='project-text'>
          {text.projects.reactionDiffusion.title}
          {text.projects.reactionDiffusion.description.map((p, index) => {
            return <div key={index} className='line'>{p}</div>;
          })}
        </div>
        <video preload='none' width="100%" autoPlay muted loop>
          <source src={ReactionDiffusion} type="video/mp4" />
        </video>
      </Frame>

    </div >
  );
}

export default App;
