$(function () {
    $("#opener").on("click", function () {
      $("#dialog-confirm").dialog("open");
    });

    $("#dialog-confirm").dialog({
      autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Wyczyść formularz": function () {
          $(this).dialog("close");
          sessionStorage.clear();
          $("#slider").slider("value", 0);
          document.getElementById("custom-handle").innerText = 0;
          document.getElementById("form").reset();
        },
        Anuluj: function () {
          $(this).dialog("close");
        },
      },
    });
  });

  $(function () {
    var handle = $("#custom-handle");
    $("#slider").slider({
      create: function () {
        $("#slider").slider("value", sessionStorage.getItem("slider"));
        handle.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        handle.text(ui.value);
        sessionStorage.setItem("slider", ui.value);
      },
    });
    $("#slider").slider({
      max: 10,
    });
  });