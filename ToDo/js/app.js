function addTask() {
    let task = `<li class="list-group-item">${$("input").val()}<i class="fas fa-trash"></i><i class="fas fa-edit"></i></li>`;
    $("ul").append(task);
    $("input").val("");
}

$(".bouton-ajout").on("click", function () {
    addTask();
});

$("input").keypress(function (event) {
    if (event.which == 13) {
        addTask();
    }
})

$("ul").on("click", ".fa-trash", function () {
    $(this).parent().remove();
})

$("ul").on("click", ".fa-edit", function () {
    $("#text-edit, #edit").remove();
    $(this).parent().append(`<input type='text' id='text-edit' /><button id='edit'>Modifier</button>`);
    $("#edit").on("click", function () {
        console.log($("#text-edit").val());
        addTask($("text-edit").val());
        //$("li").replaceWith($("input").val());
    })
})

