var psycar1;

$(function(){

    psycar1 = $('.psycar').psycar({

        time_interval_ms  : 100,
        cSpeed            : 0.5 ,
        cAmplitude        : 0.08,  // 0 to 1  
        cDeformation      : 2,
        backColor         : '#000',
        isBezier          : 'true'
        
    });

});

$(window).resize(function() {
    psycar1.resize();
});