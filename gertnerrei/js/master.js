$(document).ready(
  function()
  {
    $(".akt_menu").click(
      function()
      {
        $("#navigation").toggleClass("hideNavigation");
        $(".akt_menu").toggle();
        $("#akt_menue_deakt").toggle();
      }
    );

    $("#akt_menue_deakt").click(
      function()
      {
        $("#navigation").toggleClass("hideNavigation");
        $(".akt_menu").toggle();
        $("#akt_menue_deakt").toggle();
      }
    );
  }
);
