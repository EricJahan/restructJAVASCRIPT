//test de l'entrée du champ de texte
$(".validertest").on("click", function () {
    let color = $(".user-entry").val();
    alert(color);
    // delete color
})

// /**
//  * Le bouton Créer ajoute une DIV de taille 50x50 dans le #cadre. 
//  * La couleur de cette nouvelle DIV est celle notée dans le champ INPUT 
//  * (rouge, vert bleu, jaune, etc... si la couleur n'est pas reconnue, la DIV est jaune)
//  */

$(".create").on("click", function () {
    let div = document.createElement('div');
    let color = $(".user-entry").val();

    div.className = color;
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.background = color ? color : "yellow";
    $("#cadre").append(div);
})

//Le bouton Supprimer détruit toutes les DIV de la couleur mentionnée dans le champ INPUT
$(".delete").on("click", function () {
    let color = $(".user-entry").val();
    $('#cadre > div').remove(`.${color}`);
})

//Le bouton Détruire supprime toutes les DIV contenues dans le #cadre..
$(".destroy").on("click", function () {
    $("#cadre>div").remove();
})

//Le bouton Ecrire ajoute dans toutes les DIV contenues dans le #cadre le texte présent dans le INPUT.
$(".write").on("click", function () {
    let color = $(".user-entry").val();
    $("#cadre>div").text(color);
})

//Le bouton Vider vide simplement l'ensemble des balises INPUT et DIV de leur contenu.
$(".empty").on("click", function () {
    $(".user-entry").val("");
    $("#cadre>div").html("");
})

//Le bouton Shake secoue toutes les DIV 2 secondes
$(".shake").on("click", function () {
    $("#cadre>div").effect("shake", 1000);
})

//Lorsqu'on clique sur une DIV rouge, elle... explose ! (mais quel effet !)
/*$("#cadre").on("click",".red", function(){
        $(this).effect("explode");
})*/

//Lorsqu'on clique sur une DIV rouge, elle... explose ! (mais quel effet !)
$("#cadre").delegate("div", "click", function () {
    $(this).effect("explode");
})

//Les DIV vertes deviennent bleues au survol de la souris.
$("#cadre").on("mouseover", ".green", function () {
    $(this).css("background", "blue");
    $("#cadre").on("mouseout", ".green", function () {
        $(this).css("background", "green");
    })
})

//Les DIV jaunes deviennent rouge 3 secondes après avoir cliqué dessus
$("#cadre").on("mouseover", ".yellow", function(){
    $(this).css("transition-delay", "3s").css("background", "red");
})

//Le double-clic sur un DIV affiche le nombre de DIV de la même couleur dans une popup modale (voir Dialog dans JqueryUI)

//non fonctionnel
$("#cadre").on("click","div", function(){
    let countYellow = $("#cadre").find(".yellow").length;
    $(this).dialog({
        title: "Nombre de blocs jaunes : " +countYellow,
        modal: true,
    });
    let countGreen = $("#cadre").find(".green").length;
    $(this).dialog({
        title: "Nombre de blocs verts : " +countGreen,
        modal: true,
    });
    let countBlue = $("#cadre").find(".blue").length;
    $(this).dialog({
        title: "Nombre de blocs bleus : " +countBlue,
        modal: true,
    });
    let countRed = $("#cadre").find(".red").length;
    $(this).dialog({
        title: "Nombre de blocs rouges : " +countBlue,
        modal: true,
    });
})
