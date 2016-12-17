function Task (name, complete, id) {
  this.name = name
  this.complete = complete
  this.id = id
}

function newTaskShow (token) {
  $(".new-task").on("click", function (event) {
    event.preventDefault();
    $(".create-task").html("")
    currentUrlId = window.location.pathname

    var createForm = "<form class='task-form' id='new_task' action='" + currentUrlId + "/tasks' accept-charset='UTF-8' method='post'><input name='utf8' type='hidden' value='✓'><input type='hidden' name='authenticity_token' value='" + token + "'><input placeholder='Name' class='form-control' type='text' name='task[name]' id='task_name'><p><span class='task-list-text complete-text'>Complete?   </span><input name='task[complete]' type='hidden' value='0'><input type='checkbox' value='1' name='task[complete]' id='task_complete'></p><input type='submit' name='commit' value='Create Task' class='form-control btn-main sign-up'></form>"
    $(".create-task").append(createForm)

    $(".create-task").show(1000);
    newTask ()
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

function appendNewTask (task, listId, token) {
  return "<ul><li class='over-flow'><p class='task-name task-list-text display-inline'>" + task.name + "</p>" + completeButton(task) + "<div role='group' aria-label='...'>" +  editButton(listId,task.id)  + deleteButton(listId,task.id, token) + "</div></li></ul>"
}
