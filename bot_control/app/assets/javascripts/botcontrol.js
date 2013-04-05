$(function(){
   var status = $(".status");

   //functions

   var testing = "http://127.0.0.1:8071"
   var real = "http://192.168.1.54:8071"
   var speed = 1

   function forward(){
      console.log('moving');
      $.ajax({url: testing+"/motion-control/update", data:{forward: +speed}, dataType: "jsonp"});
      status.html("Moving Forward");
   };

   function backward(){
      console.log('backwards');
      $.ajax({url: testing+"/motion-control/update", data:{forward: -speed}, dataType: "jsonp"});
      status.html("Moving Backwards");
   };

   function right(){
      console.log('turn right');
      $.ajax({url: testing+'/motion-control/update', data:{turn: +speed}, dataType: "jsonp"});
      status.html("Turning Right");
   };

   function left(){
      console.log('turn left');
      $.ajax({url: testing+'/motion-control/update', data:{turn: -speed}, dataType: "jsonp"});
      status.html("Turning Left");
   };

   function stop(){
      console.log("ESTOP");
      $.ajax({url: testing+"/motion-control/update", data:{a: 0, s: 0, d: 0, f: 0}, dataType: "jsonp"});
      status.html("Stopped");
   };

   function st_l(){
      console.log('strafing right');
      $.ajax({url: testing+'/motion-control/update', data:{strafe: +speed}, dataType: "jsonp"});
      status.html('Strafing Right')
   };

   function st_r(){
      console.log('strafing left');
      $.ajax({url: testing+'/motion-control/update', data:{strafe: -speed}, dataType: "jsonp"});
      status.html('Strafing Left')
   };

   //button bindings

   $(".forward").on("click", function(event){
      forward();
   });

   $(".backward").on('click', function(event){
      backward();
   });

   $('.right').on('click', function(event){
      right();
   });

   $('.st_r').on('click', function(event){
      st_r();
   });

   $('.left').on('click', function(event){
      left();
   });

   $('.st_l').on('click', function(event){
      st_l();
   });

   $(".stop").on("click", function(event){
      stop();
   });

   //Key Bindings

   $(document).keydown(function(e){
      var key = e.keyCode;
      switch (key)
      {
      case 87:
         console.log('w pressed');
         forward();
         break;
      case 83:
         console.log('s pressed');
         backward();
         break;
      case 68:
         console.log('d pressed');
         right();
         break;
      case 65:
         console.log('a pressed');
         left();
         break;
      case 32:
         console.log('space pressed');
         stop();
         break;
      case 81:
         console.log('q pressed');
         st_l();
         break;
      case 69:
         console.log('e pressed');
         st_r();
         break;
      };  
   });

  $(document).keydown(function(e){
      if(e.keyCode == 13){
         console.log('half speed');
         speed = .5;
         console.log(speed);
      };
   });

  $(document).keyup(function(e){
      if(e.keyCode == 13){
         console.log('full speed');
         speed = 1;
         console.log(speed);
      }
  });

});