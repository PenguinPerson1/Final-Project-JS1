$("#Prev").hide();
var previn1=0;
var previn2=0;
var previn3=0;
var insult1=0;
var insult2=0;
var insult3=0;
//arrays
let insultsV1 =["artless ","bawdy ","beslubbering ","bootless ","churlish ","cockered ","clouted ","craven ","currish ","dankish ","dissembling ","droning ","errant ","fawning ","fobbing ","froward ","frothy ","gleeking ","goatish ","gorbellied ","impertinent ","infectious ","jarring ","loggerheaded ",
"lumpish ","mammering ","mangled ","mewling ","paunchy ","pribbling ","puking ","puny ","qualling ","rank ","reeky ","roguish ","ruttish ","saucy ","spleeny ","spongy ","surly ","tottering ","unmuzzled ","vain ","venomed ","villainous ","warped ","wayward ","weedy ",
"yeasty "];
let insultsV2 =["base-court ","bat-fowling ","beef-witted ","beetle-headed ","boil-brained ","clapper-clawed ","clay-brained ","common-kissing ","crook-pated ","dismal-dreaming ","dizzy-eyed ","doghearted ","dread-bolted ","earth-vexing ","elf-skinned ","fat-kidneyed ","fen-sucked ","flap-mouthed ","fly-bitten ","folly-fallen ","fool-born ","full-gorgedh ","guts-griping ","half-faced ",
"hasty-witted ","hedge-born ","hell-hated ","idle-headed ","ill-breeding ","ill-nurtured ","knotty-pated ","milk-livered ","motley-minded ","onion-eyed ","plume-plucked ","pottle-deep ","pox-marked ","reeling-ripe ","rough-hewn ","rude-growing ","rump-fed ","shard-borne ","sheep-biting ","spur-galled ","swag-bellied ","tardy-gaited ","tickle-brained ","toad-spotted ","unchin-snouted ",
"weather-bitten "];
let insultsV3 =["apple-john ","baggage ","barnacle ","bladder ","boar-pig ","bugbear ","bum-bailey ","canker-blossom ","clack-dish ","clotpole ","coxcomb ","codpiece ","death-token ","dewberry ","flap-dragon ","flax-wench ","flirt-gill ","foot-licker ","fustilarian ","giglet ","gudgeon ","haggard ","harpy ","hedge-pig ",
"horn-beast ","hugger-mugger ","joithead ","lewdster ","lout ","maggot-pie ","malt-worm ","mammet ","measle ","minnow ","miscreant ","moldwarp ","mumble-news ","nut-hook ","pigeon-egg ","pignut ","puttock ","pumpion ","ratsbane ","scut ","skainsmate ","strumpet ","varlot ","vassal ","whey-face ",
"wagtail "];
$("#Submit").click(()=>{
  // adding more stuff
  let add1 = $("#input1").val();
  add1=add1+" ";
  let add2 = $("#input2").val();
  add2=add2+" ";
  let add3 = $("#input3").val();
  add3=add3+" ";
  insultsV1.push(add1);
  insultsV2.push(add2);
  insultsV3.push(add3);
  let Length=insultsV1.length;
  document.getElementById('input1').value = ""
  document.getElementById('input2').value = ""
  document.getElementById('input3').value = ""
});
$("#G").click(() => {
  previn1=insult1;
  previn2=insult2;
  previn3=insult3;
  $( "#Text0" ).empty();
  //random numbers
  insult1=Math.floor(Math.random()*insultsV1.length);
  insult2=Math.floor(Math.random()*insultsV2.length);
  insult3=Math.floor(Math.random()*insultsV2.length);

  //showing results
  $("#Text0").append("Thou ");
  $("#Text0").append(insultsV1[insult1]);
  $("#Text0").append(insultsV2[insult2]);
  $("#Text0").append(insultsV3[insult3]);
  $("#Prev").show();
  //console.log(previn1);
});
$("#Prev").click(() =>  {
  $("#Text0" ).empty();
  $("#Text0").append("Thou ");
  $("#Text0").append(insultsV1[previn1]);
  $("#Text0").append(insultsV2[previn2]);
  $("#Text0").append(insultsV3[previn3]);
  $("#Prev").hide();
});
