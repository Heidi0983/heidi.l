$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('open').toggleClass('close');
       $('#slider').toggle();
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".hamburger").toggleClass('open').toggleClass('close');
    open = false;
    $('#slider').toggle();
});