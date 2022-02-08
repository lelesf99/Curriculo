export const mockData = {
    pt_BR: {
        about: {
            frame_title: "Vinícius Leles Feitosa",
            title: "Sobre mim",
            description: [
                "Sou apaixonado pela arte e pela computação, sempre me encaixei melhor no mercado de desenvolvimento frontend, mas isso nunca me impediu de aprender, tenho experiencia com front e backend igualmente. Penso que a web representa a democratização do software e nunca foi tão fácil e divertido programar.",
                "Neste currículo apresento minhas habilidades e também os projetos que mais gostei de fazer."
            ]
        },
        skills: {
            frame_title: "Habilidades",
            cards: [{
                name: "Programação",
                level: 13,
                description: [
                    "Estrutura de dados, análise de algorítmos e gerenciamento de memória.",
                    "Programação orientada a objetos com Java e Javascript",
                    "Noções de programação funcional com Clojure"
                ]
            },
            {
                name: "Frontend",
                level: 16,
                description: [
                    "Conhecimento pleno em HTML, CSS e Javascript.",
                    "Conhecimento pleno em Jquery, React.js, e experiência profissional em Angular",
                    "Noções de UX e Design"
                ]
            },
            {
                name: "Backend",
                level: 13,
                description: [
                    "Experiencia com banco de dados relacionais (php e mySql), e não relacionais (firebase firestore).",
                    "Experiência com Laravel.",
                    "Experiência com Strapi",
                ]
            },
            {
                name: "Engenharia de Software",
                level: 8,
                description: [
                    "Experiência com desenvolvimento em equipe e versionamento de código (Git).",
                    "Conhecimentos gerais de engenharia de software: metodologias ágeis, modelos de ciclo de vida e projeto de software",
                    "Experiência trabalhando com método Scrum"
                ]
            }
            ]
        },
        edu: {
            frame_title: "Educação",
            description: [
                "MÉDIO  |  2017  |  AGOSTINIANO N. S. DE FÁTIMA",
                "TÉCNICO  |  2014 - 2016 (300HRS)  |  MCTECH –  CURSO DE DESENVOLVIMENTO WEB",
                "SUPERIOR  |  (CURSANDO)  |  UNIVERSIDADE FEDERAL DE GOIÁS – CIÊNCIA DA COMPUTAÇÃO",
            ]
        },
        exp: {
            frame_title: "Experiência",
            sub_title: <h3>Projetos pessoais e universitários em Web e C, no meu <a href='https://github.com/lelesf99' target='_blank' rel='noreferrer'>Github</a>. <br /><br /></h3>,
            description: [
                <h3><strong>DESENVOLVEDOR FRONTEND |  CGE  | 2020 - 2022</strong><br /> Estágio na Controladoria Geral do Estado de Goiás, trabalhando na equipe de TI como desenvolvedor web full-stack de hotsites, e manutenção dos sites da CGE e do Portal da Transparência de Goiás (HTML, CSS, Javascript, php, mySql e Joomla).</h3>,
                <h3><strong>DESENVOLVEDOR FULL STACK  |  G4F SOLUÇÔES  | 2022 - ATUAL</strong><br /> Desenvolvedor full stack, trabalhando com Angular e laravel, além de manter e atualizar sites Joomla e Hotsites em HTML CSS Javascript e PHP.</h3>
            ]
        },
        projects: {
            description: "Alguns dos meus projetos favoritos:",
            boids: {
                frame_title: "Boids",
                title: <h2>Algoritmo de Boids por <a href='https://www.red3d.com/cwr/index.html'>Craig Reynolds</a></h2>,
                description: [
                    <p>
                        Inspirado pelos vídeos de <a href='https://www.youtube.com/watch?v=bqtqltqcQhw' target='_blank' rel='noreferrer'>Sebastian Lague</a>, e <a href='https://www.youtube.com/watch?v=mhjuuHl6qHM&t' target='_blank' rel='noreferrer'>Daniel Shiffman</a>, implementei minha versão, utilizando os métodos de renderização do <a href='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API' target='_blank' rel='noreferrer'>Canvas API</a>.
                    </p>,
                    <p>Otimizei a implementação com o método quadtree e fazendo com que cada entidade busque um numero fixo de vizinhos, se a entidade está azul. ela está procurando mais vizinhos, se estiver vermelha, o contrário.</p>,
                    <p>Você pode clicar e segurar para elas seguirem um objetivo.</p>,
                ],
            },
            reactionDiffusion: {
                frame_title: "Reação-difusão",
                title: <h2><a href='https://pt.wikipedia.org/wiki/Modelo_de_Rea%C3%A7%C3%A3o-Difus%C3%A3o' target='_blank' rel='noreferrer'>Modelo de Reação-Difusão</a></h2>,
                description: [
                    <p>Novamente, inspirado no vídeo de <a href='https://www.youtube.com/watch?v=BV9ny785UNc&t' target='_blank' rel='noreferrer'>Daniel Shiffman</a>. Seguindo a implementação de <a href='http://karlsims.com/rd.html' target='_blank' rel='noreferrer'>Karl Sims</a> e os trabalhos de <a href='http://mrob.com/pub/comp/xmorphia/' target='_blank' rel='noreferrer'>Gray-Scott</a>, fiz primeiro uma versão utilizando a <a href='https://lelesf99.github.io/ReactDiffusion/ReactDiffuseCPU/index.html' target='_blank' rel='noreferrer'>Canvas API</a>.</p>,
                    <p>Pesquisando sobre WebGL, implementei <a href='https://lelesf99.github.io/ReactDiffusion/ReactDiffuseGPU/index.html' target='_blank' rel='noreferrer'>o mesmo algoritmo utilizando WebGL</a>, aplicando as pesadas formulas de convolução na GPU, melhorando drastiacamente a performance.</p>,
                ],
            }

        }
    },
    en_US: {
        about: {
            frame_title: "Vinícius Leles Feitosa",
            title: "About me",
            description: [
                "I'm passionate about art and computing, I always fit better in the frontend development market, but that never stopped me from learning, I have experience with frontend and backend equally. I think the web represents the democratization of software and programming has never been so easy and fun.",
                "In this curriculum I present my skills and also the projects I most enjoyed doing."
            ]
        },
        skills: {
            frame_title: "Skills",
            cards: [{
                name: "Programming",
                level: 13,
                description: [
                    "Data structures, algorithm analysis and memory management with C/C++.",
                    "Object Oriented programming with Java and Javascript",
                    "Notions on Functional programmig with Clojure"
                ]
            },
            {
                name: "Frontend",
                level: 16,
                description: [
                    "Professional experience working with HTML, CSS and Javascript.",
                    "Knowledge of Jquery, React.js, and professional experience in Angular",
                    "Notions of UX and Design"
                ]
            },
            {
                name: "Backend",
                level: 13,
                description: [
                    "Experience with relational databases (postgreSQL, mySql), and non-relational databases (firebase firestore).",
                    "Experience with php and Laravel.",
                    "Experience with Strapi",
                ]
            },
            {
                name: "Software Engineering",
                level: 8,
                description: [
                    "Experience with team development and code versioning (Git).",
                    "General knowledge of software engineering: agile methodologies, life cycle models and software design",
                    "Experience working with the Scrum method"
                ]
            }
            ]
        },
        edu: {
            frame_title: "Education",
            description: [
                "HIGH SCHOOL  |  2017  |  AGOSTINIANO N. S. DE FÁTIMA",
                "CERTIFICATE COURSE  |  2014 - 2016 (300HRS)  |  MCTECH –  WEB DEVELOPMENT COURSE",
                "BACHELOR'S  |  (CURRENT TIME)  |  UNIVERSIDADE FEDERAL DE GOIÁS – COMPUTER SCIENCE",
            ]
        },
        exp: {
            frame_title: "Experience",
            sub_title: <h3>Personal and university projects in Web and C, on my <a href='https://github.com/lelesf99' target='_blank' rel='noreferrer'>Github</a>.<br /><br /></h3>,
            description: [
                <h3><strong>FRONTEND DEVELOPER |  CGE  | 2020 - 2022</strong><br /> Internship at the General Controllership of the State of Goiás, working in the IT team as a full-stack web developer of hotsites, and maintenance of the CGE sites and the Transparency Portal de Goiás (HTML, CSS, Javascript, php, mySql and Joomla).</h3>,
                <h3><strong>FULL STACK DEVELOPER  |  G4F SOLUTIONS  | 2022 - CURRENT</strong><br /> Full stack developer, working with Angular and laravel, in addition to maintaining and updating Joomla sites and Hotsites in HTML, CSS, Javascript and PHP.</h3>
            ]
        },
        projects: {
            description: "Some of my favorite projects:",
            boids: {
                frame_title: "Boids",
                title: <h2>Boids Algorithm by por <a href='https://www.red3d.com/cwr/index.html'>Craig Reynolds</a></h2>,
                description: [
                    <p>"Inspired by the videos of <a href='https://www.youtube.com/watch?v=bqtqltqcQhw' target='_blank' rel='noreferrer'>Sebastian Lague</a>, and <a href='https ://www.youtube.com/watch?v=mhjuuHl6qHM&t' target='_blank' rel='noreferrer'>Daniel Shiffman</a>, I implemented my version, using the rendering methods of <a href='https: //developer.mozilla.org/en-US/docs/Web/API/Canvas_API' target='_blank' rel='noreferrer'>Canvas API</a>.</p>,
                    <p>I optimized the implementation with the quadtree method and making each entity look for a fixed number of neighbors, if the entity is blue. it is looking for more neighbors, if it is red, the opposite.</p>,
                    <p>You can click and hold for them to follow an objective.</p>,
                ],
            },
            reactionDiffusion: {
                frame_title: "Reaction- Diffusion",
                title: <h2><a href='https://pt.wikipedia.org/wiki/Modelo_de_Rea%C3%A7%C3%A3o-Difus%C3%A3o' target='_blank' rel='noreferrer'>Reaction-Diffusion Model</a></h2>,
                description: [
                    <p>Again, inspired by the video by <a href='https://www.youtube.com/watch?v=BV9ny785UNc&t' target='_blank' rel='noreferrer'>Daniel Shiffman</a>. Following the implementation of <a href='http://karlsims.com/rd.html' target='_blank' rel='noreferrer'>Karl Sims</a> and the work of <a href='http:/ /mrob.com/pub/comp/xmorphia/' target='_blank' rel='noreferrer'>Gray-Scott</a>, I first made a version using <a href='https://lelesf99.github. io/ReactDiffusion/ReactDiffuseCPU/index.html' target='_blank' rel='noreferrer'>Canvas API</a>.</p>,
                    <p>Researching about WebGL, I implemented <a href='https://lelesf99.github.io/ReactDiffusion/ReactDiffuseGPU/index.html' target='_blank' rel='noreferrer'>the same algorithm using WebGL</a>, applying the heavy convolution formulas on the GPU, dramatically improving performance.</p>,
                ],
            }
        }

    }
}