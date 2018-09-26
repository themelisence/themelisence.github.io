$(function(){

    _scrollTopStuck();

    // special function

    $(window).on('scroll', function(){
        _scrollTopStuck();
    });

    // _scrollTopStuck
    function _scrollTopStuck(){

        var _scroll_top_stuck = $("#_scroll-top-stuck"),
            _scroll_top = $("._scroll-top"),
            _scroll = $(this).scrollTop();

            if(_scroll > _scroll_top_stuck.offset().top - 0){
                _scroll_top.fadeIn(200);
            }else{
                _scroll_top.fadeOut(200);
            }
    };

});