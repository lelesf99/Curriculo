(this.webpackJsonpcurriculo=this.webpackJsonpcurriculo||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),a=s(7),o=s.n(a),r=(s(12),s(4)),c=s.p+"static/media/profile.66afccc6.jpg",h=(s(13),s(14),s(0));function l(e){return Object(h.jsxs)("div",{className:"frame ".concat(void 0!==e.className?e.className:""),tabIndex:0,children:[Object(h.jsx)("h1",{className:"title",children:e.title}),e.children]})}s(16);var d=s(2),u=s(3),b=function(){function e(t,s,i){Object(d.a)(this,e),this.x=t,this.y=s,this.r=i,this.rr=i*i}return Object(u.a)(e,[{key:"containsPoint",value:function(e){return m.distvu(e.pos,new m(this.x,this.y))<=this.r}},{key:"intersectsBox",value:function(e){var t=new m;return t.x=this.x-e.x,t.y=this.y-e.y,!(t.x>e.w+this.r||t.x+this.r<0)&&(!(t.y>e.h+this.r||t.y+this.r<0)&&(t.x<=e.w||(t.y<=e.h||(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)>=this.rr)))}}]),e}(),j=function(){function e(t,s,i,n){Object(d.a)(this,e),this.x=t,this.y=s,this.w=i,this.h=n}return Object(u.a)(e,[{key:"containsPoint",value:function(e){return e.pos.x>this.x&&e.pos.x<=this.x+this.w&&e.pos.y>this.y&&e.pos.y<=this.y+this.h}},{key:"intersectsBox",value:function(e){return!(e.x>=this.x+this.w||e.x+e.w<this.x||e.y>=this.y+this.h||e.y+e.h<this.y)}},{key:"intersectsCircle",value:function(e){return e.intersectsBox(this)}}]),e}(),m=function(){function e(t,s){Object(d.a)(this,e),this.x=t,this.y=s}return Object(u.a)(e,[{key:"add",value:function(e){return this.x=this.x+e.x,this.y=this.y+e.y,this}},{key:"sub",value:function(e){return this.x=this.x-e.x,this.y=this.y-e.y,this}},{key:"mult",value:function(e){return this.x=this.x*e,this.y=this.y*e,this}},{key:"div",value:function(e){return this.x=this.x/e,this.y=this.y/e,this}},{key:"dist",value:function(e){return Math.sqrt((this.x-e.x)*(this.x-e.x)+(this.y-e.y)*(this.y-e.y))}},{key:"magSq",value:function(){var e=this.x,t=this.y;return e*e+t*t}},{key:"mag",value:function(){return Math.sqrt(this.magSq())}},{key:"normalize",value:function(){var e=this.mag();return 0!==e&&this.mult(1/e),this}},{key:"setMag",value:function(e){return this.normalize().mult(e)}},{key:"limit",value:function(e){var t=this.magSq();return t>e*e&&this.div(Math.sqrt(t)).mult(e),this}},{key:"dot",value:function(e){return this.x*e.x+this.y*e.y}},{key:"angle",value:function(){return this.y<0?-e.angleBetween(this,new e(1,0)):e.angleBetween(this,new e(1,0))}}],[{key:"addvu",value:function(t,s){return new e(t.x+s.x,t.y+s.y)}},{key:"subvu",value:function(t,s){return new e(t.x-s.x,t.y-s.y)}},{key:"multvk",value:function(t,s){return new e(t.x*s,t.y*s)}},{key:"distvu",value:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))}},{key:"angleBetween",value:function(e,t){return Math.acos(e.dot(t)/(e.mag()*t.mag()))}},{key:"fromVAngle",value:function(t,s){var i=new e(0,0);return i.x=t.x*Math.cos(s)-t.y*Math.sin(s),i.y=t.x*Math.sin(s)+t.y*Math.cos(s),i.setMag(1),i}},{key:"randomV",value:function(t,s){return new e(Math.random()*t-s,Math.random()*t-s)}}]),e}();function f(e,t,s,i,n,a){var o=(e-t)/(s-t)*(n-i)+i;return a?i<n?this.constrain(o,i,n):this.constrain(o,n,i):o}var p=function(){function e(t,s,i,n){Object(d.a)(this,e),this.pos=new m(t,s),this.prePos=new m(this.pos.x,this.pos.y),this.vel=m.randomV(20,10),this.acc=new m(0,0),this.wanderVel=m.randomV(20,10),this.localMates=[],this.desiredNeighbors=10,this.senseRadius=20,this.FOV=120*Math.PI/180,this.sense=new b(this.pos.x,this.pos.y,this.senseRadius),this.maxforce=.3125,this.maxspeed=8,this.minspeed=this.maxspeed/2,this.alFac=1,this.cohFac=1,this.sepFac=1,this.wanFac=.3,this.color="",this.domain=i,this.drawingCtx=n}return Object(u.a)(e,[{key:"pushLocalMates",value:function(e,t){var s=this;this.localMates=e.query(t),this.localMates.filter((function(e){var t=s.pos.dist(e.pos);return e!==s&&(m.angleBetween(m.subvu(e.pos,s.pos),s.vel)<s.FOV||t<=s.senseRadius/2)})),this.localMates.length>=this.desiredNeighbors&&this.senseRadius>3?this.senseRadius-=2:this.senseRadius+=1;var i=f(this.senseRadius,100,0,0,255),n=f(this.senseRadius,60,0,100,0),a=f(this.senseRadius,60,0,255,50);this.color="rgb( "+i+", "+n+", "+a+")"}},{key:"popLocalMates",value:function(){this.localMates.splice(0,this.localMates.length)}},{key:"align",value:function(){for(var e=new m(0,0),t=0,s=this.localMates.length-1;s>=0;s--)e.add(this.localMates[s].vel),t++;0!==t&&(e.div(t),this.alFac<.4&&(this.alFac=.4),this.seek(e,this.alFac))}},{key:"cohesion",value:function(){for(var e=new m(0,0),t=0,s=this.localMates.length-1;s>=0;s--)e.add(this.localMates[s].pos),t++;if(0!==t){e.div(t);var i=this.pos.dist(e),n=1;i<this.senseRadius&&(n=f(i,0,this.senseRadius,.5,1.6)),e.sub(this.pos),this.seek(e,this.cohFac*n)}}},{key:"separate",value:function(){for(var e=new m(0,0),t=0,s=this.localMates.length-1;s>=0;s--){var i=m.subvu(this.pos,this.localMates[s].pos),n=this.pos.dist(this.localMates[s].pos);0===n&&(n=.01),i.div(n),e.add(i),t++}0!==t&&(e.div(t),this.seek(e,this.sepFac))}},{key:"wander",value:function(){this.wanderVel.add(m.randomV(1,.5)),this.wanderVel.limit(this.maxspeed);var e=m.subvu(this.vel,this.wanderVel);this.seek(e,this.wanFac)}},{key:"interest",value:function(e,t){var s=new m(e.x,e.y),i=m.subvu(s,this.pos),n=this.pos.dist(s);n<t&&(n=0),i.mult(n),i.sub(this.pos),this.seek(i,n*t*5e-5)}},{key:"seek",value:function(e,t){e.setMag(this.maxspeed),e.sub(this.vel),e.limit(this.maxforce*t),this.acc.add(e)}},{key:"update",value:function(){var e=new m(this.domain.width/2,this.domain.height/2),t=20;this.pos.x>this.domain.width+t&&(this.pos.x=-20),this.pos.x<-20&&(this.pos.x=this.domain.width+t),this.pos.y>this.domain.height+t&&(this.pos.y=-20),this.pos.y<-20&&(this.pos.y=this.domain.height+t),this.prePos=new m(this.pos.x,this.pos.y),this.seek(m.subvu(e,this.pos),.1),this.wander(),this.vel.add(this.acc),this.vel.mag()<=this.minspeed&&this.vel.setMag(this.minspeed),this.pos.add(this.vel),this.acc.mult(0)}},{key:"draw",value:function(){var e,t,s,i,n;this.update(),e=this.drawingCtx,t=this.prePos,s=this.pos,i=1,n=this.color,e.strokeStyle=n,e.lineWidth=i,e.lineCap="round",e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(s.x,s.y),e.stroke()}}]),e}(),x=function(){function e(t,s){Object(d.a)(this,e),this.cap=t,this.bound=s,this.points=[],this.quad1=null,this.quad2=null,this.quad3=null,this.quad4=null}return Object(u.a)(e,[{key:"subdivide",value:function(){var t=new j(this.bound.x+this.bound.w/2,this.bound.y,this.bound.w/2,this.bound.h/2),s=new j(this.bound.x,this.bound.y,this.bound.w/2,this.bound.h/2),i=new j(this.bound.x,this.bound.y+this.bound.h/2,this.bound.w/2,this.bound.h/2),n=new j(this.bound.x+this.bound.w/2,this.bound.y+this.bound.h/2,this.bound.w/2,this.bound.h/2);this.quad1=new e(this.cap,t),this.quad2=new e(this.cap,s),this.quad3=new e(this.cap,i),this.quad4=new e(this.cap,n)}},{key:"insert",value:function(e){if(!this.bound.containsPoint(e))return!1;if(this.points.length<this.cap&&null==this.quad1)return this.points.push(e),!0;null==this.quad1&&this.subdivide();for(var t=0;t<this.points.length;t++)this.insert(this.points.pop());return!!this.quad1.insert(e)||(!!this.quad2.insert(e)||(!!this.quad3.insert(e)||!!this.quad4.insert(e)))}},{key:"query",value:function(e,t,s){return t||(t=[]),e.intersectsBox(this.bound)?(this.points.forEach((function(s){e.containsPoint(s)&&t.push(s)})),null==this.quad1?(void 0!==s&&this.bound.show("#55555555"),t):(this.quad1.query(e,t,s),this.quad2.query(e,t,s),this.quad3.query(e,t,s),this.quad4.query(e,t,s),t)):t}}]),e}();function v(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){var t=e.current,s=t.getContext("2d"),i=500,n=500,a=new OffscreenCanvas(n,i),o=a.getContext("2d");t.width=n,t.height=i;var r,c=[],h=t.width/2,l=t.height/2,d=0,u=0,f=512;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(f=128);for(var v=0;v<f;v++)c.push(new p(Math.random()*t.width,Math.random()*t.height,t,o));return function e(){if(function(e){var t=e.getBoundingClientRect();return t.top>=0-t.height&&t.bottom<=window.innerHeight+t.height}(t)){for(var f=new x(32,new j(0,0,n,i)),p=0;p<c.length;p++)f.insert(c[p]);s.fillStyle="#00000033",s.fillRect(0,0,t.width,t.height),o.clearRect(0,0,t.width,t.height),d>0?(d+=u,u>.5?u-=.5:u>0&&u<=.5&&(u=0)):d=0,d>=1&&function(e,t,s,i){e.beginPath(),e.arc(t.x,t.y,s,0,2*Math.PI),e.fillStyle=i,e.fill(),e.strokeStyle="#00000033",e.stroke()}(o,new m(h,l),d,"#55555522");for(var v=0;v<c.length;v++){var y=new b(c[v].pos.x,c[v].pos.y,c[v].senseRadius);c[v].pushLocalMates(f,y),c[v].align(),c[v].cohesion(),c[v].separate(),d>=5&&c[v].interest(new m(h,l),d),c[v].popLocalMates()}for(var O=0;O<c.length;O++)c[O].draw();s.drawImage(a,0,0)}r=requestAnimationFrame(e)}(),t.addEventListener("mousedown",(function(e){h=e.offsetX,l=e.offsetY,d+=50,u=5})),t.addEventListener("mousemove",(function(e){h=e.offsetX,l=e.offsetY})),t.addEventListener("mouseup",(function(e){u=-4})),t.addEventListener("touchstart",(function(e){e.preventDefault(),h=e.touches[0].clientX,l=e.touches[0].clientY,d=50,u=5}),!1),t.addEventListener("touchmove",(function(e){if(e.preventDefault(),d>=1){var t=e.target.getBoundingClientRect();h=e.touches[0].pageX-t.left,l=e.touches[0].pageY-t.top}}),!1),t.addEventListener("touchend",(function(e){e.preventDefault(),u=-4}),!1),window.addEventListener("resize",(function(){n=t.clientWidth,i=t.clientHeight,t.width=n,t.height=i,a.width=n,a.height=i})),function(){c=[],cancelAnimationFrame(r)}}),[]),Object(h.jsx)("canvas",{width:"100%",ref:e})}s(17);function y(e){var t=Object(i.useRef)(),s=Object(i.useState)(!1),n=Object(r.a)(s,2),a=n[0],o=n[1],c=Object(i.useState)(0),l=Object(r.a)(c,2),d=l[0],u=l[1];return Object(i.useEffect)((function(){t.current&&u(t.current.offsetHeight)}),[a]),Object(h.jsxs)("div",{tabIndex:"0",className:"card click-card ".concat(void 0!==e.className?e.className:""," ").concat(a?"active":""),onClick:void 0!==e.onClick?function(){return e.onClick()}:function(){return null},onFocus:function(){return o(!0)},onBlur:function(){return o(!1)},children:[e.header&&Object(h.jsx)("div",{className:"card-header",children:e.header}),e.body&&Object(h.jsx)("div",{className:"card-body ".concat(e.collapse?"collapse":""),style:a?{height:d,opacity:1}:{height:0,opacity:0},children:e.collapse?Object(h.jsx)("div",{className:"collapse-padding",ref:t,children:e.body}):Object(h.jsx)(h.Fragment,{children:e.body})}),e.footer&&Object(h.jsx)("div",{className:"card-footer",children:e.footer})]})}s(18);function O(e){return Object(h.jsxs)("div",{className:"level-wrapp",children:[Object(h.jsx)("div",{className:"level-1 level",style:{width:"".concat(10*(e.level>10?10:e.level),"%")}}),Object(h.jsx)("div",{className:"level-2 level",style:{width:"".concat(10*(e.level>10?e.level-10:0),"%")}})]})}var g=s.p+"static/media/react-difuse.c1a81a55.mp4",w=s(6);var k=function(){var e=Object(i.useState)(!localStorage.getItem("theme")||JSON.parse(localStorage.getItem("theme"))),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(i.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(s)),s?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"))}),[s]),Object(h.jsxs)("div",{className:"app",children:[s?Object(h.jsx)(w.b,{className:"theme-btn",tabIndex:0,onClick:function(){return n(!1)}}):Object(h.jsx)(w.a,{className:"theme-btn",tabIndex:0,onClick:function(){return n(!0)}}),Object(h.jsx)(l,{className:"container",title:"Vin\xedcius Leles Feitosa",children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"profile-pic",children:Object(h.jsx)("img",{src:c,alt:""})}),Object(h.jsxs)("div",{className:"about-text",children:[Object(h.jsx)("h2",{children:"Sobre mim"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Sou apaixonado pela arte e pela computa\xe7\xe3o, sempre me encaixei melhor no mercado de desenvolvimento frontend, mas isso nunca me impediu de aprender, tenho experiencia com front e backend igualmente. Penso que a web representa a democratiza\xe7\xe3o do software e nunca foi t\xe3o f\xe1cil e divertido programar."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Neste curr\xedculo apresento minhas habilidades e tamb\xe9m os projetos que mais gostei de fazer."})]})]})}),Object(h.jsxs)(l,{className:"container",title:"Habilidades",children:[Object(h.jsx)(y,{collapse:!0,header:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Programa\xe7\xe3o"}),Object(h.jsx)(O,{level:13})]}),body:Object(h.jsx)("p",{children:"Conhecimento de conceitos fundamentais e avan\xe7ados de estruturas de dados, an\xe1lise de algoritmos e matem\xe1tica para computa\xe7\xe3o."})}),Object(h.jsx)(y,{collapse:!0,header:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Frontend"}),Object(h.jsx)(O,{level:16})]}),body:Object(h.jsx)("p",{children:"Conhecimento pleno em HTML, CSS, Bootstrap, Javascript e React. No\xe7\xf5es de Angular."})}),Object(h.jsx)(y,{collapse:!0,header:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Backend"}),Object(h.jsx)(O,{level:8})]}),body:Object(h.jsx)("p",{children:"Experiencia com banco de dados Relacionais (php e mySql), e n\xe3o relacionais (firebase firestore). Desenvolvimento de APIs com Firebase cloud functions e php, no\xe7\xf5es de express.js e MongoDb."})}),Object(h.jsx)(y,{collapse:!0,header:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Projeto de Software"}),Object(h.jsx)(O,{level:8})]}),body:Object(h.jsx)("p",{children:"Conhecimento de metodologias \xe1geis, modelos de ciclo de vida e de projetos de software. No\xe7\xf5es de engenharia de software e experi\xeancia com desenvolvimento em equipe e versionamento de c\xf3digo (Git)."})})]}),Object(h.jsx)(l,{className:"container",title:"Educa\xe7\xe3o",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"M\xc9DIO \xa0|\xa0 2017 \xa0|\xa0 AGOSTINIANO N. S. DE F\xc1TIMA"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"T\xc9CNICO \xa0|\xa0 2014 - 2016 (300HRS) \xa0|\xa0 MCTECH \u2013  CURSO DE DESENVOLVIMENTO WEB"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"SUPERIOR \xa0|\xa0 (CURSANDO) \xa0|\xa0 UNIVERSIDADE FEDERAL DE GOI\xc1S \u2013 CI\xcaNCIA DA COMPUTA\xc7\xc3O"}),Object(h.jsx)("br",{})]})}),Object(h.jsx)(l,{className:"container",title:"Experi\xeancia",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Projetos pessoais e universit\xe1rios em Web e C, no meu ",Object(h.jsx)("a",{href:"https://github.com/lelesf99",target:"_blank",rel:"noreferrer",children:"Github"}),"."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("h3",{children:[Object(h.jsx)("strong",{children:"ESTAGI\xc1RIO \xa0|\xa0 CGE \xa0|\xa02020 - ATUAL"})," Est\xe1gio na Controladoria Geral do Estado de Goi\xe1s, trabalhando na equipe de TI como desenvolvedor web full-stack de hotsites, e manuten\xe7\xe3o dos sites da CGE e do Portal da Transpar\xeancia de Goi\xe1s (HTML, CSS, Javascript, php, mySql e Joomla)."]}),Object(h.jsx)("br",{})]})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h2",{children:"Alguns dos meus projetos favoritos:"})}),Object(h.jsxs)(l,{className:"container",title:"Boids",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"boids-text",children:[Object(h.jsxs)("h2",{children:["Algoritmo de Boids por ",Object(h.jsx)("a",{href:"https://www.red3d.com/cwr/index.html",children:"Craig Reynolds"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["Inspirado pelos v\xeddeos de ",Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=bqtqltqcQhw",target:"_blank",rel:"noreferrer",children:"Sebastian Lague"}),", e ",Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=mhjuuHl6qHM&t",target:"_blank",rel:"noreferrer",children:"Daniel Shiffman"}),", implementei minha vers\xe3o, utilizando os m\xe9todos de renderiza\xe7\xe3o do ",Object(h.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",target:"_blank",rel:"noreferrer",children:"Canvas API"}),"."]}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Otimizei a implementa\xe7\xe3o com o m\xe9todo quadtree e fazendo com que cada entidade busque um numero fixo de vizinhos, se a entidade est\xe1 azul. ela est\xe1 procurando mais vizinhos, se estiver vermelha, o contr\xe1rio."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Voc\xea pode clicar e segurar para elas seguirem om objetivo."})]})]}),Object(h.jsxs)(l,{className:"container",title:"Rea\xe7\xe3o-difus\xe3o",children:[Object(h.jsxs)("div",{className:"boids-text",children:[Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:"https://pt.wikipedia.org/wiki/Modelo_de_Rea%C3%A7%C3%A3o-Difus%C3%A3o",target:"_blank",rel:"noreferrer",children:"Modelo de Rea\xe7\xe3o-Difus\xe3o"})}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["Novamente, inspirado no v\xeddeo de ",Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=BV9ny785UNc&t",target:"_blank",rel:"noreferrer",children:"Daniel Shiffman"}),". Seguindo a implementa\xe7\xe3o de ",Object(h.jsx)("a",{href:"http://karlsims.com/rd.html",target:"_blank",rel:"noreferrer",children:"Karl Sims"})," e os trabalhos de ",Object(h.jsx)("a",{href:"http://mrob.com/pub/comp/xmorphia/",target:"_blank",rel:"noreferrer",children:"Gray-Scott"}),", fiz primeiro uma vers\xe3o utilizando a ",Object(h.jsx)("a",{href:"https://lelesf99.github.io/ReactDiffusion/ReactDiffuseCPU/index.html",target:"_blank",rel:"noreferrer",children:"Canvas API"}),"."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["Pesquisando sobre WebGL, implementei ",Object(h.jsx)("a",{href:"https://lelesf99.github.io/ReactDiffusion/ReactDiffuseGPU/index.html",target:"_blank",rel:"noreferrer",children:"o mesmo algoritmo utilizando WebGL"}),", aplicando as pesadas formulas de convolu\xe7\xe3o na GPU, melhorando drastiacamente a performance."]})]}),Object(h.jsx)("video",{preload:"none",width:"100%",autoPlay:!0,muted:!0,loop:!0,children:Object(h.jsx)("source",{src:g,type:"video/mp4"})})]})]})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),i(e),n(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),M()}],[[19,1,2]]]);
//# sourceMappingURL=main.70684459.chunk.js.map