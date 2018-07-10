$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    $('input:checkbox[name=stress]:checked').each(function(){
      var stressTestAnswer = parseInt($(this).val());
      var responseStr;

       if( stressTestAnswer > 5 && stressTestAnswer < 9) {
         responseStr = "Take a deep breath and call your health counsellor"
       }
       else if ( stressTestAnswer < 4 && stressTestAnswer === 0){
         responseStr = "You got this!"
       }
