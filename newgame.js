



// function reveal_cup()
// {
// $(".mug").show()
// }


function openingText()
{

setTimeout(function (){$("h1").text("Helloo")}, 500);
setTimeout(function (){$("h1").text("Hellooo")}, 600);
setTimeout(function (){$("h1").text("Hellooooo!!!")}, 700);
setTimeout(function (){$("h1").text("Hellooooowwaa!!!")}, 800);
setTimeout(function (){$("h1").text("It's my birthday today!")}, 2000);
setTimeout(function (){$("h1").text("All my team gave me...")}, 4000);
setTimeout(function (){$("h1").text("was a virtual mug...")}, 6000);

}



function openingText1()
{

setInterval(function (){$("h1").text("Helloo")}, 500);
setInterval(function (){$("h1").text("Hellooo")}, 2000);
setInterval(function (){$("h1").text("Hellooooo!!!")}, 3000);
setInterval(function (){$("h1").text("Hellooooowwaa!!!")}, 1000);
setInterval(function (){$("h1").text("It's my birthday today!")}, 1000);
setInterval(function (){$("h1").text("All my team gave me...")}, 4000);
setInterval(function (){$("h1").text("was a virtual mug...")}, 6000);

}

$(".linda").hide();
$(".weekend").hide();
$(".talkweekend").hide();
$(".headertalk").hide();
$(".gatorPond").click(function(){
  setTimeout(function (){openingText()}, 1500)
  $(".linda").show();
  setInterval(function (){$(".headertalk").show()}, 1000);
})


$(".pickle").click(function(){
  $(".weekend").show();
  $(".talkweekend").show();
  setTimeout(function (){
    $(".weekend").hide()}, 2500);
    setTimeout(function (){
      $(".talkweekend").hide()}, 2500);
})
