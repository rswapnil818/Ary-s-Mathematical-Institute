
$(document).ready(function(){
    $('.sub-btn').click(function(){

        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown1').toggleClass('rotate');
    });

    //jquary for expand and collapse the sidebar
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility","hidden");
    });

    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility","visible");
   
   
    });
});
