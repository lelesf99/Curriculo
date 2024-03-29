export const mockData = {
    pt_BR: {
        code: 1,
        about: {
            frame_title: "Vinícius Leles Feitosa",
            title: "Sobre mim",
            description: [
                <p>Programador com 4 anos de experiência em desenvolvimento web full-stack. Habilidade de construir websites interativos e com foco na experiência do usuário. Capacidade comprovada de manter e melhorar sistemas legados em HTML+CSS+PHP puros, assim como usar novas tecnologias, sistemas projetados e entregues em Angular + Laravel.</p>,
                <p>Fiz esse currículo do zero utilizando React.js.</p>,
                <h2>Contato:</h2>,
                <p>Github: <a href="https://github.com/lelesf99" target="_blank" rel="noopener noreferrer">lelesf99</a></p>,
                <p>LinkedIn: <a href="https://www.linkedin.com/in/lelesf99/" target="_blank" rel="noopener noreferrer">/in/lelesf99</a></p>,
                <p>Email: <a href="mailto:viniciuslelesf@gmail.com">viniciuslelesf@gmail.com</a></p>
            ]
        },
        skills: {
            frame_title: "Habilidades",
            cards: [{
                name: "Programação",
                level: 13,
                description: [
                    "Estrutura de dados, análise de algoritmos e gerenciamento de memória.",
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
                    "Experiência com banco de dados relacionais (postgreSQL e mySql), e não relacionais (firebase firestore).",
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
                "- MÉDIO  |  2017  |  AGOSTINIANO N. S. DE FÁTIMA",
                "- TÉCNICO  |  2014 - 2016 (300HRS)  |  MCTECH –  CURSO DE DESENVOLVIMENTO WEB",
                "- SUPERIOR  |  (CURSANDO)  |  UNIVERSIDADE FEDERAL DE GOIÁS – CIÊNCIA DA COMPUTAÇÃO",
            ]
        },
        exp: {
            frame_title: "Experiência",
            sub_title: <p>- Projetos pessoais e universitários em Web e C, no meu <a href='https://github.com/lelesf99' target="_blank" rel="noopener noreferrer">Github</a>. <br /><br /></p>,
            description: [
                <>
                    <h3><strong>- DESENVOLVEDOR FRONTEND |  CGE  | 2020 - 2022</strong></h3>
                    <p> Estágio na Controladoria Geral do Estado de Goiás, trabalhando na equipe de TI como desenvolvedor web full-stack de hotsites, e manutenção dos sites da CGE e do Portal da Transparência de Goiás (HTML, CSS, Javascript, php, mySql e Joomla).</p>
                </>,
                <>
                    <h3><strong>- DESENVOLVEDOR FULL STACK  |  G4F SOLUÇÔES  | 2022 - ATUAL</strong></h3>
                    <p>Desenvolvedor full stack, trabalhando com Angular e laravel, além de manter e atualizar sites Joomla e Hotsites em HTML CSS Javascript e PHP.</p>
                </>
            ]
        },
        projects: {
            description: "Alguns dos meus projetos pessoais:",
            boids: {
                frame_title: "Boids",
                title: <h2>Algoritmo de Boids por <a href='https://www.red3d.com/cwr/index.html' target="_blank" rel="noopener noreferrer">Craig Reynolds</a></h2>,
                description: [
                    <p>
                        Inspirado pelos vídeos de <a href='https://www.youtube.com/watch?v=bqtqltqcQhw' target="_blank" rel="noopener noreferrer">Sebastian Lague</a>, e <a href='https://www.youtube.com/watch?v=mhjuuHl6qHM&t' target="_blank" rel="noopener noreferrer">Daniel Shiffman</a>, implementei minha versão, utilizando os métodos de renderização do <a href='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API' target="_blank" rel="noopener noreferrer">Canvas API</a>.
                    </p>,
                    <p>Otimizei a implementação com o método quadtree e fazendo com que cada entidade busque um numero fixo de vizinhos, se a entidade está azul. ela está procurando mais vizinhos, se estiver vermelha, o contrário.</p>,
                    <p>Você pode clicar e segurar para elas seguirem um objetivo.</p>,
                ],
            },
            reactionDiffusion: {
                frame_title: "Reação-difusão",
                title: <h2><a href='https://pt.wikipedia.org/wiki/Modelo_de_Rea%C3%A7%C3%A3o-Difus%C3%A3o' target="_blank" rel="noopener noreferrer">Modelo de Reação-Difusão</a></h2>,
                description: [
                    <p>Novamente, inspirado no vídeo de <a href='https://www.youtube.com/watch?v=BV9ny785UNc&t' target="_blank" rel="noopener noreferrer">Daniel Shiffman</a>. Seguindo a implementação de <a href='http://karlsims.com/rd.html' target="_blank" rel="noopener noreferrer">Karl Sims</a> e os trabalhos de <a href='http://mrob.com/pub/comp/xmorphia/' target="_blank" rel="noopener noreferrer">Gray-Scott</a>, fiz primeiro uma versão utilizando a <a href='https://lelesf99.github.io/ReactDiffusion/ReactDiffuseCPU/index.html' target="_blank" rel="noopener noreferrer">Canvas API</a>.</p>,
                    <p>Pesquisando sobre WebGL, implementei <a href='https://lelesf99.github.io/ReactDiffusion/ReactDiffuseGPU/index.html' target="_blank" rel="noopener noreferrer">o mesmo algoritmo utilizando WebGL</a>, aplicando as pesadas formulas de convolução na GPU, melhorando drasticamente a performance.</p>,
                ],
            }

        }
    },
    en_US: {
        code: 2,
        about: {
            frame_title: "Vinícius Leles Feitosa",
            title: "About me",
            description: [
                <p>Software Engineer with 4 years of experience in full-stack web development. Expertise in building interactive and user-centered websites to scale. Proven ability to maintain and improve legacy systems in pure HTML5+CSS+PHP, as well as using new technologies, designed and delivered systems using Angular + Laravel.</p>,
                <p>I built this resume from scratch using React.js.</p>,
                <h2> Contact:</h2>,
                <p>Github: <a href="https://github.com/lelesf99" target="_blank" rel="noopener noreferrer">lelesf99</a></p>,
                <p>LinkedIn: <a href="https://www.linkedin.com/in/lelesf99/" target="_blank" rel="noopener noreferrer">/in/lelesf99</a></p>,
                <p>Email: <a href="mailto:viniciuslelesf@gmail.com">viniciuslelesf@gmail.com</a></p>
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
                    "Notions of functional programming with Clojure"
                ]
            },
            {
                name: "Frontend",
                level: 16,
                description: [
                    "Professional experience working with HTML, CSS and Javascript.",
                    "Knowledge of Jquery, React.js, and professional experience in Angular",
                    "Knowledge of UX and Design patterns"
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
                    "experience working with the Scrum methodology"
                ]
            }
            ]
        },
        edu: {
            frame_title: "Education",
            description: [
                "- HIGH SCHOOL  |  2017  |  AGOSTINIANO N. S. DE FÁTIMA",
                "- CERTIFICATE COURSE  |  2014 - 2016 (300HRS)  |  MCTECH –  WEB DEVELOPMENT COURSE",
                "- BACHELOR'S  |  (IN PROGRRESS)  |  UNIVERSIDADE FEDERAL DE GOIÁS – COMPUTER SCIENCE",
            ]
        },
        exp: {
            frame_title: "Experience",
            sub_title: <p>- Personal and university projects in Web and C, on my <a href='https://github.com/lelesf99' target="_blank" rel="noopener noreferrer">Github</a>.<br /><br /></p>,
            description: [
                <>
                    <h3><strong>- FRONTEND DEVELOPER |  CGE  | 2020 - 2022</strong></h3>
                    <p> Internship at the General Controllership of the State of Goiás, working in the IT team as a full-stack web developer of landing pages, and maintenance of the CGE sites and the Goiás's state Transparency Site  (HTML, CSS, Javascript, php, mySql and Joomla).</p>
                </>,
                <>
                    <h3><strong>- FULL STACK DEVELOPER  |  G4F SOLUTIONS  | 2022 - CURRENT</strong></h3>
                    <p> Full stack developer, working with Angular and laravel, in addition to maintaining and updating Joomla sites and Hotsites in HTML, CSS, Javascript and PHP.</p>
                </>
            ]
        },
        projects: {
            description: "Some of my personal projects:",
            boids: {
                frame_title: "Boids",
                title: <h2>Boids Algorithm by <a href='https://www.red3d.com/cwr/index.html'  target="_blank" rel="noopener noreferrer">Craig Reynolds</a></h2>,
                description: [
                    <p>"Inspired by the videos of <a href='https://www.youtube.com/watch?v=bqtqltqcQhw' target="_blank" rel="noopener noreferrer">Sebastian Lague</a>, and <a href='https://www.youtube.com/watch?v=mhjuuHl6qHM&t' target="_blank" rel="noopener noreferrer">Daniel Shiffman</a>, I implemented my version, using the rendering methods of <a href='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API' target="_blank" rel="noopener noreferrer">Canvas API</a>.</p>,
                    <p>I optimized the implementation with the quadtree method and making each entity look for a fixed number of neighbors, if the entity is blue, it is looking for more neighbors; if it is red, the opposite is true.</p>,
                    <p>You can click and hold for them to follow an objective.</p>,
                ],
            },
            reactionDiffusion: {
                frame_title: "Reaction-Diffusion",
                title: <h2><a href='https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system' target="_blank" rel="noopener noreferrer">Reaction-Diffusion Model</a></h2>,
                description: [
                    <p>Again, inspired by the video by <a href='https://www.youtube.com/watch?v=BV9ny785UNc&t' target="_blank" rel="noopener noreferrer">Daniel Shiffman</a>. Following the implementation of <a href='http://karlsims.com/rd.html' target="_blank" rel="noopener noreferrer">Karl Sims</a> and the work of <a href='http://mrob.com/pub/comp/xmorphia/' target="_blank" rel="noopener noreferrer">Gray-Scott</a>, I first made a version using <a href='https://lelesf99.github. io/ReactDiffusion/ReactDiffuseCPU/index.html' target="_blank" rel="noopener noreferrer">Canvas API</a>.</p>,
                    <p>Researching about WebGL, I implemented <a href='https://lelesf99.github.io/ReactDiffusion/ReactDiffuseGPU/index.html' target="_blank" rel="noopener noreferrer">the same algorithm using WebGL</a>, applying the heavy convolution formulas on the GPU, drastically improving performance.</p>,
                ],
            }
        }

    }
}