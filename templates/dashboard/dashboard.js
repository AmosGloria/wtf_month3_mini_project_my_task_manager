document.addEventListener("DOMContentLoaded", () => {
    const taskButton = document.getElementById('task');

    if (taskButton) {
        taskButton.addEventListener("click", () => {
            window.location.href = "/templates/task-management/task.html";
        });
    } else {
        console.error('taskButton element not found!');
    }
});
