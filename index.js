$(document).ready(function() {
  $(".accordion-header").click(function() {
    var toggleContainer = $(this).closest(".accordion").find(".toggleContainer");

    toggleContainer.slideToggle(function() {
      $(this).find(".fade-image").each(function(index) {
        $(this).delay(index * 200).fadeIn();
      });
    });
  });
});