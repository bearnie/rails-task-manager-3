function newTaskShow () {
  $(".new-task").on("click", function (event) {
    event.preventDefault();
    $(".create-task").show(1000);
  });
}
