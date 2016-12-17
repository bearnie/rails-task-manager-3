function newTaskShow () {
  $(".new-task").on("click", function (event) {
    event.preventDefault();
    $(".create-task").show(1000);
  });
}

function completeButton(task) {
  var complete = "";

  if (task.complete) {
    complete = "checked='checked'"
  } else {
    complete = ""
  }

  var completeButton = "<div class='float-right'><p class='task-list-text display-inline'><input type='checkbox' name='completed?'id='task_complete'value='1' disabled='disabled'" +  complete + "></p></div>";

  return completeButton

}

function deleteButton (listId, taskId, token) {

  var myDeleteButton = "<form class='button_to' method='post' action='/lists/" + listId + "/tasks/" + taskId + "'><input type='hidden' name='_method' value='delete'><input class='button-small btn' type='submit' value='Delete'><input type='hidden' name='authenticity_token' value=" + token + "></form>"

  return myDeleteButton

}

function editButton (listId, taskId) {

  var myEditButton = "<form class='button_to margin-right-5' method='get' action='/lists/" + listId  + "/tasks/" + taskId + "/edit'><input class='button-small btn light-green' type='submit' value='Edit'></form>";

  return myEditButton
}
