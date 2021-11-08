$(document).ready(function() {
  $("#lightSlider").lightSlider(
    {
      item: 3,
      autoWidth: false,
      slideMove: 1,
      slideMargin: 10,
      mode: "slide",
      pager: false,
      responsive : [
        {
            breakpoint:786,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:6,
              }
        }, 
        {
            breakpoint:576,
            settings: {
                item:1,
                slideMove:1
              }
        }
    ]     
    }
  ); 
});