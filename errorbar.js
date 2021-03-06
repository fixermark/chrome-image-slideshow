// Copyright 2011 Mark T. Tomczak
//       
// See the README file for license information

// Handler for the error bar

$(function() {
  $(".closebox", "#errorbar").click(
    function () {
      HideError();
    });
})

function ShowError(msg) {
  $(".errormsg","#errorbar").html(msg);
  $("#errorbar").show('fast');
}

function HideError(msg) {
  $("#errorbar").hide('fast');
}
$(function () {
  Handle("error", function(error) {
      ShowError(error.msg);
  });
});
