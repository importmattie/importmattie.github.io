$(document).ready(function() {
  $(".changes-content").click(function() {
    let contentToShow = $(this).attr("id").replace("-link", "");
    $(".content").hide();
    $("#" + contentToShow).show();

    // Only toggle the toggler if it's visible
    const navbarToggler = $(".navbar-toggler");
    if (navbarToggler.css("display") != "none" && contentToShow != "content-home") {
      navbarToggler.click();
    }
  });
});
