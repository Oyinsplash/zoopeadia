$(document).ready(function() {
  $("form").on("submit", function(e) {
    let name = $("#name").val();
    let facts = $("#facts").val();
    let image = $("#image").val();

    e.preventDefault();
    $.ajax({
      url: " http://localhost:3000/animals",
      success: function(result) {
        console.log(result);
      },
      method: "POST",
      data: {
        name,
        facts,
        image
      }
    });
  });
});
