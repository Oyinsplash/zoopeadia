$(document).ready(function() {
  let url = new URL(window.location.href);
  // console.log(url);
  let newId = url.searchParams.get("id");
  let id = parseInt(newId, 10);

  $.ajax({
    url: `http://localhost:3000/animals/${id}`,
    success: function(result) {
      console.log(result);
      $(".animal-container").append(`
              <div class="col-md-3 animal-card">
                  <div class="animal-pic">
                      <img src=${result.image} alt=""/>
                  </div>
                  <div class="animal-info">
                      <h3 class="animal-name">${result.name}</h3>
                      <h4 class="animal-fact">${result.facts}
                  </div>
              </div>
              `);
    },
    method: "GET"
  });
});
