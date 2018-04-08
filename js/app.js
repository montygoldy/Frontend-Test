//Onclick play video
$(document).ready(function(){
 $('#video-button').on('click', () => {
   $('.video-section').prepend('<iframe src="https://www.youtube.com/embed/Ldjmb15Jsx0?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=Ldjmb15Jsx0" frameborder="0" allowfullscreen></iframe>');
   $(".video-section__content").hide();
 })
});