/*------------------------------------------------------------------

[_nel Setting]

-------------------------------------------------------------------*/

$(function(){

    // ready function

    _filter();
    _filterPopup();
    _scrollSmooth();

    // _filter function
    function _filter(){

        var containerEl = document.querySelector('.mix-container');

        var mixer = mixitup(containerEl, {
            animation: {
                easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
            }
        });

    }

    // _filter popup function
    function _filterPopup(e){
        $('.mix-container').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
              verticalFit: true,
              titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
              }
            },
            gallery: {
              enabled: true
            },
            zoom: {
              enabled: true,
              duration: 400, // don't foget to change the duration also in CSS
              opener: function(element) {
                return element.find('img');
              }
            },
            callbacks: {
                open: function() {
                    $('html').css('margin-right', '0px');
                }
            }
        });

        $('._video').magnificPopup({
            items: {
                 src: 'https://www.youtube.com/watch?v=XwQDIQ52UK0'
            },
            type: 'iframe',
            fixedContentPos: false,
            iframe: {
                    markup: '<div class="mfp-iframe-scaler">'+
                            '<div class="mfp-close"></div>'+
                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                            '<div class="mfp-bottom-bar">' +
                            '<div class="mfp-title"></div>' +
                            '</div>', 
                    patterns: {
                    youtube: {
                          index: 'youtube.com/', 
                          id: 'v=', 
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                        }
                    },
                    srcAction: 'iframe_src', 
             }
        });
    }

    // _scrollSmooth
    function _scrollSmooth(){
        $("a[href^='#']").click(function(e) {
            e.preventDefault();
            
            var position = $($(this).attr("href")).offset().top - 70;

            $("body, html").animate({
                scrollTop: position
            }, 800 );
        });
    }

    // slick
    $("#_testimonials").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800
    });

    // counterUp
    $('._counter').counterUp({
        delay: 10,
        time: 1000
    });

});
