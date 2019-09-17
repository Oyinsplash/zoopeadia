$.ajax({
  url: `http://localhost:3000/animals`,
  success: function(result) {
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      $(".animal-container").append(`
        <div class="animal-card">
<div class="animal-pic">
  <img src=${result[i].image} alt=""/>
</div>
<div class="animal-info">
  <h3 class="animal-name">${result[i].name}</h3>
  <h4><a>Click here to</a></h4>
</div>
</div>
`);
    }
  },
  method: "GET"
});

