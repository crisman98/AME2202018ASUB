var allImages = [
  'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqcpjpEqtY2iy9mWTaqF6bvqeWigxJ69B8Oehm6SdNj1ng9v0',
  'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=',
  'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
  'https://static.pexels.com/photos/34950/pexels-photo.jpg'
];

var currentSlide = 1;

var start = function()
{
  var markup = "";
  for(var i = 0; i < allImages.length; i++){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
  }

  /*
  var i = 0;
  while(i < allImages.length){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
    i = i + 1;
  }
   */
  $("#ssContainer").html(markup);

  var markup1 = "";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',1000)">' + (i + 1) + '</button>';
  }
  $("#numContainer").html(markup1);



  goToSlide(1, 0);
}


var goToSlide = function(n, d)
{
  d = d || 0;
  $(".slide").stop().removeClass("currentSlide").removeClass("slideLeft").removeClass("slideRight");

  $(".slide:nth-of-type(" + n + ")").addClass("currentSlide");
  $(".currentSlide").animate({left: "0%"}, 500); 
  var z = 0
  while (z < n) {
    $(".slide:nth-of-type(" + z + ")").addClass("slideLeft");
    z++;
  }
  $(".slideLeft").animate({left: "-100%"}, 500);
  var x = 0
  x = n + 1
  while (x < (allImages.length + 1)) {
    $(".slide:nth-of-type(" + x + ")").addClass("slideRight");
    x++;
  }
  $(".slideRight").animate({left: "100%"}, 500); 

    $("#numContainer button").removeClass("active");
    $("#numContainer button:nth-of-type(" + n + ")").addClass("active");

    currentSlide = n;
  }
 


var goNext = function()
{
  var n = currentSlide + 1;
  if (n > allImages.length){
    n = 1;
  } 
  goToSlide(n, 1000);
}

var goPrev = function()
{
  var n = currentSlide - 1;
  if (n < 1){
    n = allImages.length;
  } 
  
  goToSlide(n, 1000);
}