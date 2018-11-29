//The vector v is used to set the level of the skills and languages
//the values of v are n*5%, and are respectively [developer,servers,database,math,ptbr,eng,spanish]
var v = [11,7,5,14,12,15,2];
var vaux = [0,0,0,0,0,0,0];
var headerdone = false;
var levelbarsdone = false;
//This function will be use in most of the animations
function animate({duration, timing, draw}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
//these functions will create timing-graphs for the animations
function makeEaseOut(timing) {
  return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }
function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
var quadEaseOut = makeEaseOut(quad);
//levelbars animations
function setlevelbars() {

  if(levelbarsdone==false){
    animate({
      duration: 1000,
      timing: quadEaseOut,
      draw: function(progress) {
        for(i=0;i<7;i++){
          if(progress==1){
            animate({
              duration: 1000,
              timing: quadEaseOut,
              draw: function(progress) {

                for(i=0;i<7;i++){
                  document.getElementById('extrabar' + i).style.width = progress * vaux[i] * 10 + '%';
                }
              }
            });
          }
          if(v[i]<=10){
            document.getElementById('level' + i).style.width = progress * v[i] * 10 + '%';
            vaux[i]=0;
          }else{
            document.getElementById('level' + i).style.width = progress * 100 + '%';
            vaux[i]=v[i]-10;
          }
        }
      }
    });
    levelbarsdone = true;
  }
}
//header animation
function header(){
  let y = getY();
  if(y >= 10 && headerdone==false){
    let content = document.getElementById('content')
    let head = document.getElementById('header');
    headerdone = true;
    animate({
      duration: 1000,
      timing: quadEaseOut,
      draw: function(progress) {
        head.style.paddingTop = 65 - (65 * progress) + 'vh';
      }
    });
    animate({
      duration: 1000,
      timing: quadEaseOut,
      draw: function(progress) {
        content.style.paddingBottom =  (20 * progress) + 'vh';
      }
    });
  }

  setlevelbars();
}
function getY(){
    let y = window.pageYOffset;
    return y;
}

