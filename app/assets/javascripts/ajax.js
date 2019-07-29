fetch("http://localhost:3001/posts.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    test = data;
  })
  .catch(function(err) {
    console.log(err);
  });
