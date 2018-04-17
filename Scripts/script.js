var insultsV1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish",
 "gorbellied," "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny",
  "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty"];

$("#generator").click(() => {
  $( "#Text" ).empty();
  let insult1=Math.floor(Math.random()*51);
  let insult2=Math.floor(Math.random()*51);
  let insult3=Math.floor(Math.random()*51);
  let insult1T= insultsV1[Math.floor(Math.random()*51)]

  document.getElementById("Text").innerHTML = insultsV1[0];

});
