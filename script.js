
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/
$('#myCarousel').carousel();
 var winWidth = $(window).innerWidth();
 $(window).resize(function () {

     if ($(window).innerWidth() < winWidth) {
         $('.carousel-inner>.item>img').css({
             'min-width': winWidth, 'width': winWidth
         });
     }
     else {
         winWidth = $(window).innerWidth();
         $('.carousel-inner>.item>img').css({
             'min-width': '', 'width': ''
         });
     }
 });
console.log("Hey look in your browser console. It works!");
