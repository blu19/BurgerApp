
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      Devoured: newDevour
    };

    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devour to", newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log($("#burger_name").val())
    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: $("[name=devoured]:checked").val()
    };

    $.ajax("/burgers/new", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });
});
