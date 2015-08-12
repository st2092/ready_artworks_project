var main = function ()
{
  $(".bxslider").bxSlider({
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 170,
    slideMargin: 10,
    ticker: true,
    speed: 6000
  });
}

$(document).ready(main);