$("document").ready(function() {
  $("main").on("mousemove", function(event) {
    var xPos = (event.pageX * -1) / 48 + 20;
    var yPos = (event.pageY * -1) / 18 +30;
    $(".img-principal-container").css({
     'transform': 'translate3d('+xPos* -1 +'px, '+yPos* -1 +'px, 0px)'
    });
    
    $(".elem-1").css({
      'transform': 'translate3d('+xPos*0.7 +'px, '+yPos*0.2  +'%, 0px)'
    });
    $(".elem-2").css({
      'transform': 'translate3d('+xPos*0.6 +'px, '+yPos*0.3 +'%, 0px)'
    });
    $(".elem-3").css({
      'transform': 'translate3d('+xPos*0.5 +'px, '+yPos*0.4 +'%, 0px)'
    });
    $(".elem-4").css({
      'transform': 'translate3d('+xPos*0.4 +'px, '+yPos*0.5 +'%, 0px)'
    });
    $(".elem-5").css({
      'transform': 'translate3d('+xPos*0.3 +'px, '+yPos*0.6 +'%, 0px)'
    });
    $(".elem-6").css({
      'transform': 'translate3d('+xPos*0.2 +'px, '+yPos*0.7 +'%, 0px)'
    });

  });
});
