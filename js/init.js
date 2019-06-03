(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown({
      inDuration: 500,
      outDuration: 1000,
      hover: true,
      coverTrigger: false,
      constrainWidth: false,
      stopPropagation: false
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.modal').modal();
})
/*
$(document).ready(function(){

});*/
