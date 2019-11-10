$("#post-comment").submit(function(event) {
  event.preventDefault();
  // event.stopPropagation();

  let result = {
    article: $(".article").attr("href").replace("/articles/", ""),
    username: $("#username").val().trim(),
    body: $("#comment-text").val().trim()
  }

  // console.log(result);

  $.post( "/articles/:id", result, function(data) {
    //console.log(`Posted: ${res} ${req}`)
    console.log(data);
  })

  $("form").trigger("reset");
})