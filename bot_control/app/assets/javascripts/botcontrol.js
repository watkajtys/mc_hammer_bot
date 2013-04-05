$(function(){
   var status = $(".status");

   $(".forward").on("click", function(event){
      console.log("moving");
      $.ajax({url: "http://127.0.0.1:8071/motion-control/update", data:{forward: 1}, dataType: "jsonp"});
      status.html("Moving Forward");
   });

   $(".backward").on('click', function(event){
      console.log('backwards');
      $.ajax({url: "http://127.0.0.1:8071/motion-control/update", data:{forward: -1}, dataType: "jsonp"});
      status.html("Moving Backwards");
   });

   $('.right').on('click', function(event){
      console.log('turn right');
      $.ajax({url: 'http://127.0.0.1:8071/motion-control/update', data:{turn: +1}, dataType: "jsonp"});
      status.html("Turning Right");
   });

   $('.st_r').on('click', function(event){
      console.log('strafing right');
      $.ajax({url: 'http://127.0.0.1:8071/motion-control/update', data:{strafe: +1}, dataType: "jsonp"});
      status.html('Strafing Right')
   });

   $('.left').on('click', function(event){
      console.log('turn left');
      $.ajax({url: 'http://127.0.0.1:8071/motion-control/update', data:{turn: -1}, dataType: "jsonp"});
      status.html("Turning Left");
   });

    $('.st_l').on('click', function(event){
      console.log('strafing left');
      $.ajax({url: 'http://127.0.0.1:8071/motion-control/update', data:{strafe: -1}, dataType: "jsonp"});
      status.html('Strafing Left')
   });

   $(".stop").on("click", function(event){
      console.log("ESTOP");
      $.ajax({url: "http://127.0.0.1:8071/motion-control/update", data:{a: 0, s: 0, d: 0, f: 0}, dataType: "jsonp"});
      status.html("Stopped");
   });
});