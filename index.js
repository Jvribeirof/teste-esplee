function fadeScroll(select){
    let scrlTop = $(document).scrollTop();
    let offset = $(window).height() * 3/4
    let itemTop = select.offset().top;

    if(scrlTop >= itemTop - offset){
        select.addClass('fade')}
}

//RODA AO DER RE-LOAD NA PÁGINA
$('.js-fade').each(function(){
    fadeScroll($(this));
})

//RODA AO SCROLLAR A PÁGINA
$(document).scroll(function(){
    $('.js-fade').each(function(){
        fadeScroll($(this));
    })
})

$('.n2, .n3, .n4, .n5').hide();
let qnt = $('#pt3 .item') 
for(let i = 1; i<=qnt.length;i++){
    $('#pt3 .item').eq(i-1).on({
        mouseenter:function(){
            $('.passo').hide();
            $('.n'+(i)).fadeIn();
        }
    })
}
/*$('#pt3 .item').eq(2).hover(function(){
    $('.passo').hide();
    $('.n3').fadeIn();

})*/