function myFunction() {
    document.getElementById("demo").innerHTML = "This graphic lets you go back in time and scroll through key developments in the conspiracy theory, from the initial Mueller investigations to the era of Covid-19. Fifteen pictures of the most common words in &ldquo;QDrops&rdquo; also demonstrate the shifting focus in the conspiracy theory during its three years of existence.";

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

function method() {
    var x = document.getElementById("methodContent");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function glossary() {
    var x = document.getElementById("glossaryContent");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function image2(){

// const ri = document.querySelector("#scrollcontainer");
// const rI = document.querySelectorAll("#scrollcontainer test2");
// const rH = rI.scrollHeight;
  if ($('.scrollcontainer').scrollTop() < 600)
  {
    document.getElementById("img2").style.display = "none";
    document.getElementById("img1").style.display = "block";
    console.log("hello");
  }
  if ($('.scrollcontainer').scrollTop() > 600 && $('.scrollcontainer').scrollTop() < 1400)
  {
    document.getElementById("img3").style.display = "none";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img1").style.display = "none";
    console.log("hello");
  }
  if ($('.scrollcontainer').scrollTop() > 1400 && $('.scrollcontainer').scrollTop() < 2200)
  {
    document.getElementById("img3").style.display = "block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img4").style.display = "none";
  }
  if ($('.scrollcontainer').scrollTop() > 2200)
  {
    document.getElementById("img4").style.display = "block";
    document.getElementById("img3").style.display = "none";
  }
}


  //create read more link at top of the page
// $(".read-more").each(function(i, item) {
//     var $item = $(item);
//     var link = $("<a class='more-link'>Read more...</a>");
//     $item.replaceWith(link);
//     link.on("click", function() {
//       link.replaceWith($item);
//       $item.hide().fadeIn();
//     });
//   });

//collapse sources and credits


// var collapse = $(".collapsible");
//   collapse.find(".content").hide();
//   collapse.on("click", ".trigger", function() {
//     var parent = $(this).closest(".collapsible");
//     parent.find(".content").slideToggle();
//     parent.toggleClass("expanded");
//   });