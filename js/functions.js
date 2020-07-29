//The vector v is used to set the level of the skills and languages
//the values of v are n*5%, and are respectively [developer,servers,database,math,ptbr,eng,spanish]

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
  
  //These vector is used to set the level of the skills and languages
  //their values are n*5%, and are respectively [developer,design,database,math,ptbr,eng,spanish]
  let levelbars      = [10,10,3,10,10,10,2];
  let extralevelbars = [1, 5,0, 2,2, 2, 0];
  
  if(levelbarsdone==false){
    animate({
      duration: 1000,
      timing: quadEaseOut,
      draw: function(progress) {
        for(i=0;i<7;i++){
          if(progress == 1){
            animate({
              duration: 1000,
              timing: quadEaseOut,
              draw: function(progress) {
                for(i=0;i<7;i++){
                  document.getElementById('extrabar' + i).style.width = progress * extralevelbars[i] * 10 + '%';
                }
              }
            });
          }
          document.getElementById('level' + i).style.width = progress * levelbars[i] * 10 + '%';
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
    let content = document.getElementById('content');
    let head = document.getElementById('header');
    headerdone = true;
    animate({
      duration: 1000,
      timing: quadEaseOut,
      draw: function(progress) {
        head.style.paddingTop = 70 - (70 * progress) + 'vh';
      }
    });
    animate({
      duration: 1000,
      timing: quadEaseOut,
      draw: function(progress) {
        content.style.height =  (70 * progress) + 'vh';
      }
    });
  }
  setlevelbars();
}
function getY(){
    let y = window.pageYOffset;
    return y;
}

