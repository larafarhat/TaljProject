var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
   
    },


  });