var x  = 0;
$("#submit").click(function()
{
  if(x===0)
  {
    $(".chatbox__support").css("opacity",1);
    x = 1;
  }
  else{
    $(".chatbox__support").css("opacity",0);
    x = 0;
  }

});
