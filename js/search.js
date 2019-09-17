$(document).ready(function() {
    $("form").on("submit", function(e) {
      let search = $("#search").val();
      e.preventDefault();
      $.ajax({
        url: `http://localhost:3000/animals?name=${search}`,
        success: function(result) {
          console.log(result);
        },
        method: "GET"
      });
    });
  });
  