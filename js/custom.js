
$(function(){
  //set or get lang
  $('body').attr('data-current-lang','pt');
  
  $('[data-switch-lang]').click(function(){
    
    var newLang = $(this).attr('data-switch-lang'),
        currentLang = $('body').attr('data-current-lang');
    
    if (newLang !== currentLang){
      
      //swap content
      $('[data-lang="' + newLang + '"]').show();
      $('[data-lang="' + $('body').attr('data-current-lang') + '"]').hide();
      
      //set language for future needs
      $('body').attr('data-current-lang',newLang);
      
      //optional
      $('.dropdownTrigger[data-dropdown-id="language"]').text(newLang);
      
      //Recalculate panels and equal elements
      $(window).resize();
    }
    
  });
});

