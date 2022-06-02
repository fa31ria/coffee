$(document).ready(function(){
    $('.controls .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.menu .image').show(400);

        }
        else{
            $('.menu .image').not('.' + filter).hide(400);
            $('.menu .image').filter('.' + filter).show(200);
        }

    }); 
    $('.fa-shopping-cart').click(function(){
        $('.menu').toggleClass('active');
    });
});