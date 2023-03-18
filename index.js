import './commands'
   Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
 // failing the test
   return false
   })


(function($){
    "use strict"
    //nav-bar
    $(window).scroll(function(){
        if($(this).scrollTop() >200){
            $('.navbar').fadeIn('slow').css('display','flex');
        }
        // else{
        //     $('.navbar').fadeOut('slow').css('display','none');
        // }
    });
    
    // $(".navbar-nav a").on('click', function (event){
    // if(this.hash!==""){
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop:$(this.hash).offset().top - 45
    //     },1500,'easeInOutExpo');
    
    //     if($(this).parents('.navbar-nav').length){
    //         $('.navbar-nav .active').removeClass('active');
    //         $(this).closest('a').addClass('active');
    //     }
    // }
    // });
    
    //skillbar
    // $('.skill').waypoint(function (){
    // $('.progress .progress-bar').each(function (){
    //     $(this).css("width",$(this).attr("aria-valuenow")+'%');
    // });
    // },{offset:'80%'});
    
    
    
    //typed
    if($('.typed-text-output').length==1){
        var typed_strings= $('.typed-text').text();
        var typed= new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackSpace:false,
            loop:true
        });
    }
    
    })(jQuery);
    
    
    
    