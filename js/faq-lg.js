$(document).ready(function(){
    // $('.q1').on('click',function(){
    //     $('.addCircle').addClass('circle');
    //     $('.arrow1').addClass('arrow-transition');
    // })
    // $('.q2').on('click',function(){
    //     $('.addCircle2').addClass('circle');
    //     $('.arrow2').addClass('arrow-transition');
    // })
    $('.q').on('click', function(){
        var target = $(this).attr('rel');
        $("#"+target).show().siblings("div").hide();
        $("."+target).addClass('activeCircle').siblings("div").removeClass('activeCircle');

     });
})