
$("a").click(
  function() {
    var active = $(".hamburger-menu").hasClass("active");
    if (active == true) {
      $(".hamburger-menu").removeClass("active");
    } else {
      $(".hamburger-menu").addClass("active");
    }
  }
);

// $("i").click(
//   function() {
//     $("hamburger-menu").show();
//     console.log("ho cliccato");
//   }
// );

// $("a").click(
//   function() {
//     $("hamburger-menu").fadeIn(1000);
//   }
//   );


// console.log("inizio");
