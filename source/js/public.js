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