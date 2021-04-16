$(document).ready(function(){
    $(".bt-info").click(function(){
        $("body").toggleClass("info-is-open")
    })
})

$(".birth-in").hover(
  function() {
    $("body").addClass("hover-birth");
  }, function() {
    $("body").removeClass("hover-birth");
  }
);