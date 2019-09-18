$.ajax({
  url: `http://localhost:3000/animals`,
  success: function(result) {
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      $(".animal-container").append(`
        <div class="col-md-3 animal-card">
          <div class="animal-pic">
            <a href="/animal.html?id=${result[i].id}"><img src=${result[i].image} alt=""/></a>
          </div>
          <div class="animal-info">
            <h3 class="animal-name">${result[i].name}</h3>
          </div>
        </div>
`);
    }
  },
  method: "GET"
});
