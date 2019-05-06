//Cliquer sur un bouton et afficher le type et la tendance correspondants

$(".panda").on("click", function(){
    alert($(this).attr("data-type") + " & " + $(this).attr("data-tendance"));
})