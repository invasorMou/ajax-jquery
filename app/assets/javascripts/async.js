function getAllPosts() {
  $.ajax({
    url: "http://localhost:3001/posts.json",
    success: function(response) {
      $(".post").empty();
      console.log(response);
      response.forEach(function(post) {
        $(".post").append(`
          <div>
            <h2 class="post-title" onclick="getPost(${post.id})">
              ${post.title}
            </h2>
            <hr/>
          </div>
          `);
      });
    },
    error: function(err) {
      console.log("request fail");
      console.log(err);
    }
  });
}

function getPost(id = 1) {
  $.ajax({
    url: `/posts/${id}.json`,
    success: function(response) {
      console.log(response);
      $(".post").empty();
      $(".post").append(`
        <div>
          <h2>${response.title}</h2>
          <p>${response.body}</p>
          <p><i>${response.created_at}</i></p>
        </div>
        `);
    },
    error: function(err) {
      console.log("request fail");
      console.log(err);
    }
  });
}

function submitForm(event) {
  event.preventDefault();
  var post = {};
  $("input").each(function() {
    post[this.name] = this.value;
  });
  $.ajax({
    url: "/posts.json",
    method: "POST",
    data: { post: post },
    success: function(response) {
      console.log("post was created");
      console.log(response);
      $(".post").empty();
      $(".post").append(`
        <div>
          <h2>${response.location.title}</h2>
          <p>${response.location.body}</p>
          <p><i>${response.location.created_at}</i></p>
        </div>
        `);
    },
    error: function() {
      console.log("post was not created");
    }
  });
}
