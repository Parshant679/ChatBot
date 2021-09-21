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
var recognition = new webkitSpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;

recognition.lang = "en-US";

function startDictation() {

    recognition.start();

}
recognition.onresult = function(e) {
      document.getElementById('input_box').value = e.results[0][0].transcript;
      recognition.stop();

}
recognition.onerror = function(e) {
      recognition.stop();
    }
