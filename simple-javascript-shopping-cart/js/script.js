$(document).ready(function () {
  var textInput = $("#rizki_inputshop").val();

  $(".rizki_responsive .rizki_gallery").on("click", function (e) {
    $(".rizki_count").css({ display: "block" });
    var itemvalue = $(this).html();
    $(".rizki_list").append(
      '<li    class="rizki_gallery">' + $(this).html() + "</li>"
    );
    var shoplistlocal = $(".rizki_list").html();
    localStorage.setItem("rizki_shoplistlocal", shoplistlocal);
    return false;
  });

  $(".rizki_list").on("click", ".rizki_gallery", function () {
    $(this).remove();
    $(".rizki_count").css({ display: "block" });
    var itemlength = $(".rizki_app-body li").length;
    $(".rizki_count").text(itemlength);
    var shoplistlocal = $(".rizki_list").html();
    localStorage.setItem("rizki_shoplistlocal", shoplistlocal);
    return false;
  });

  $(".rizki_closewindow").click(function () {
    $(".rizki_app").fadeOut(500);
  });
  $("#rizki_tray").click(function () {
    $(".rizki_app").fadeIn(500);
  });

  $(".rizki_gallery").click(function () {
    var itemlength = $(".rizki_app-body li").length;
    $(".rizki_count").text(itemlength);
  });

  $(".rizki_openpopup2").click(function () {
    window.localStorage.clear();
    $(".rizki_list").children().remove();
    $(".rizki_count").hide();
    return false;
  });
});
