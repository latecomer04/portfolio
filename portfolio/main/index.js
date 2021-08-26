var typed = new Typed('.typing', {
  strings: ["Competetive Programmer.", "Developer.","Pythonist."],
  loop:true,
  typeSpeed: 100,
  backSpeed:100
});


$(".nav-item").click(function(){
  var x=$(".nav-item").attr("id");
  $(""+x).toggle(".pressed");
});
