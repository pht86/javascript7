$(function (){
    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endzone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function (){
        if (endzone < $window.scrollTop()){
            $slideAd.animate({'right': '0px'}, 250);
        }
    });
});