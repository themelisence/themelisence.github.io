$(function(){
  $('._vegas').vegas({
    overlay: true,
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    animation: 'random',
    animationDuration: 20000,
    slides: [
      { src: 'img/corporate/1.jpg' },
      { src: 'img/corporate/2.jpg' },
      { src: 'img/corporate/3.jpg' },
    ]
  });
});