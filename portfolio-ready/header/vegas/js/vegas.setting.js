$(function(){
  $('.vegas').vegas({
    overlay: true,
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    animation: 'random',
    animationDuration: 20000,
    slides: [
      { src: 'img/vegas/1.jpg' },
      { src: 'img/vegas/2.jpg' },
      { src: 'img/vegas/3.jpg' }
    ]
  });
});