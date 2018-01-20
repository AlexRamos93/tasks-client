const renderTasks = tasks => {
    return tasks.map(task => {
      //let done = task.done ? "ios-checkmark" : "ios-circle-outline";
      return `<li class="item item-icon-left item-button-right">
        
        ${task.name}
        <button data-remove data-task-id="${task._id}"
          class="button button-assertive">
          <i class="ion-trash-a"></i>
        </button>
      </li>`;
    }).join("");
  };
  exports.render = tasks => {
    if (tasks && tasks.length) {
      return `<ul class="list">${renderTasks(tasks)}</ul>`;
    }
    return `<h4 class="text-center">The task list is empty</h4>`;
  };