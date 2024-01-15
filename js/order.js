$(document).on("click", ".rizki_send_form", function () {
  var input_blanter = document.getElementById("rizki_wa_email");

  /* Whatsapp Settings */
  var walink = "https://web.whatsapp.com/send",
    phone = "6285559207029",
    walink2 = "Halo saya ingin Order Produk Kamu ",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    /* Call Input Form */
    var input_select1 = $("#rizki_wa_select :selected").text(),
      input_name1 = $("#rizki_wa_name").val(),
      input_email1 = $("#rizki_wa_email").val(),
      input_number1 = $("#rizki_wa_number").val(),
      input_url1 = $("#rizki_wa_url").val(),
      input_textarea1 = $("#rizki_wa_textarea").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "*Name* : " +
      input_name1 +
      "%0A" +
      "*Email Address* : " +
      input_email1 +
      "%0A" +
      "*Product Name* : " +
      input_url1 +
      "%0A" +
      "*Select Size* : " +
      input_number1 +
      "%0A" +
      "*Select Payment* : " +
      input_select1 +
      "%0A" +
      "*Address* : " +
      input_textarea1 +
      "%0A";

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("rizki_text-info").innerHTML =
      '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("rizki_text-info").innerHTML =
      '<span class="no">' + text_no + "</span>";
  }
});
