
//Mobile side Menu Toggle ------------------------------------
   $('#sidebar-toggle-btn').click(function(){
    $(this).toggleClass('open');
  });
(function() {



    var body, bodyClick, button, mbileSidemobileMenu;
  
 

    button = $('#sidebar-toggle-btn');
  
    mbileSidemobileMenu = $('.mbile-side-mobile-menu');
  
    body = $('body');
  
    bodyClick = function(event) {
      if( $('#sidebar-toggle-btn').hasClass("view"))
          {
            $(this).removeClass('open');
          }
          else{
            $(this).toggleClass('open');
          }
      if (!$(event.target).closest('.mobile-menu').length) {
        body.off('click');
        $('#sidebar-toggle-btn').removeClass('open');
        return mbileSidemobileMenu.toggleClass('mobile-menu-open');
      }
    };
  
    button.on('click', function(event) {

        console.log("ok");

      event.stopPropagation();
      event.preventDefault();
      setTimeout((function() {
        mbileSidemobileMenu.toggleClass('mobile-menu-open');
      }), 25);
      return body.on('click', function(event) {
        if (mbileSidemobileMenu.hasClass('mobile-menu-open')) {
          return bodyClick(event);
        }
      });
    });
  
  }).call(this);

   

  //-------Toggle Menu End-----------------------------------------