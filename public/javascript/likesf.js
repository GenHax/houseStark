function like_add(postId) {
  console.log("like working");
  var u = document.URL
  u = u.substr(0, u.lastIndexOf('/')) + "/post/" + postId + "/like";
  $.ajax({
    url: u,
    method: "PUT"
  }).
  done(function(data) {
    console.log(data.likes);
    $("#like" + postId).find('i').css("color", "green");
    $("#like" + postId).attr('onclick', "remove_like('"+postId+"')");
    v=parseInt($("#like-count" + postId).text());
     $("#like-count"+postId).text(v+1);
  }).fail(function(xhr, status, error) {
    console.log(error);

  })


}

function remove_like(postId) {
  console.log("unlike working");
  console.log(postId);
  var u = document.URL
  u = u.substr(0, u.lastIndexOf('/')) + "/post/" + postId + "/unlike";
  $.ajax({
    url: u,
    method: "PUT"
  }).
  done(function(data) {
    console.log(data.likes);
    $("#like" + postId).find('i').css("color", "red");
    $("#like" + postId).attr('onclick', "like_add('"+postId+"')");
    q=parseInt($("#like-count"+postId).text());
     $("#like-count"+postId).text(q-1);
  }).fail(function(xhr, status, error) {
    console.log(error);

  })


}

// updateuserlikes(repu);
