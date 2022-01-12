let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("d");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "white";
}

//call counter
// $('.counter').counterUp();

//call counter
// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });









// $(".count").each(function () {
//   $(this)
//     .prop("Counter", 0)
//     .animate(
//       {
//         Counter: $(this).text(),
//       },
//       {
//         duration: 4000,
//         easing: "swing",
//         step: function (now) {
//           $(this).text(Math.ceil(now));
//         },
//       }
//     );
// });





// function countTo() {
//   let from = 10;
//   let to = 100;
//   let step = to > from ? 1 : -1;
//   let interval = 10;

//   if (from == to) {
//     document.querySelector("#output").textContent = from;
//     return;
//   }

//   let counter = setInterval(function () {
//     from += step;
//       document.querySelector("#output").textContent = from;
//       if (from - to) {
//           clearInterval(counter)
//       }
//   }, interval);
// }
