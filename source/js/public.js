
    function swiper(){
    	var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay: 5000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType : 'bullets',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
      })
    }
$(function(){
    $(".searchicon").click(function() {
        window.location.href="search.html";
    });

    $(".foottitle").click(function(event) {
    $(this).next(".list").toggle(400);
    $(this).children('.xiala').toggle(400);
    $(this).children('.shangla').toggle(400);
    });

    $(".select").click(function(event) {
    $(".head_list").toggle();
    $(".select").toggleClass('show');
    });
});