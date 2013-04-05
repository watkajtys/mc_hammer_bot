$(function(){
   var status = $(".status");

   //functions

   var testing = "http://127.0.0.1:8071"
   var real = "http://192.168.1.54:8071"

   function forward(){
      console.log('moving');
      $.ajax({url: testing+"/motion-control/update", data:{forward: +1}, dataType: "jsonp"});
      status.html("Moving Forward");
   };

   function backward(){
      console.log('backwards');
      $.ajax({url: testing+"/motion-control/update", data:{forward: -1}, dataType: "jsonp"});
      status.html("Moving Backwards");
   };

   function right(){
      console.log('turn right');
      $.ajax({url: testing+'/motion-control/update', data:{turn: +1}, dataType: "jsonp"});
      status.html("Turning Right");
   };

   function left(){
      console.log('turn left');
      $.ajax({url: testing+'/motion-control/update', data:{turn: -1}, dataType: "jsonp"});
      status.html("Turning Left");
   };

   function stop(){
      console.log("ESTOP");
      $.ajax({url: testing+"/motion-control/update", data:{a: 0, s: 0, d: 0, f: 0}, dataType: "jsonp"});
      status.html("Stopped");
   };

   function st_l(){
      console.log('strafing right');
      $.ajax({url: testing+'/motion-control/update', data:{strafe: +1}, dataType: "jsonp"});
      status.html('Strafing Right')
   };

   function st_r(){
      console.log('strafing left');
      $.ajax({url: testing+'/motion-control/update', data:{strafe: -1}, dataType: "jsonp"});
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

   $(document).keydown(function(e) {
      if(e.keyCode == 87){
         console.log('w pressed');
         forward();
      };
   });

   $(document).keydown(function(e){
      if(e.keyCode == 83){
         console.log('s pressed');
         backward();
      }
   });

   $(document).keydown(function(e){
      if(e.keyCode == 68){
         console.log('d pressed');
         right();
      };
   });

   $(document).keydown(function(e){
      if(e.keyCode == 65){
         console.log('a pressed');
         left();
      };
   })

   $(document).keydown(function(e){
      if(e.keyCode == 32){
         console.log('space pressed');
         stop();
      };
   });

   $(document).keydown(function(e){
      if(e.keyCode == 81){
         console.log('q pressed');
         st_l();
      };
   });

   $(document).keydown(function(e){
      if(e.keyCode == 69){
         console.log('e pressed');
         st_r();
      };
   });

  $(document).keypress(function(e){
      if(e.keyCode == 13){
         console.log('enter held');
      };
   });

});