$(document).ready(function () {



    var compteurCt = 0;
    var compteurSec = 0;
    var compteurMin = 0;
    var compteurHr = 0;
    var comptage;

    function chrono() {
        if (compteurCt < 99) {
            compteurCt++;
        }
        else {
            compteurCt = 0;
            compteurSec++;
            $("#chrono").removeClass().addClass(tabColor[randColor]);
            console.log("toto");
            if (compteurSec < 60) { }
            else {
                compteurSec = 0;
                compteurMin++;
                if (compteurMin < 60) { }
                else {
                    compteurMin = 0; compteurHr++
                }
            }
        }
        $("#chrono").text(compteurHr + ":" + compteurMin + ":" + compteurSec + ":" + compteurCt);
    };

        tabColor = ["chrono-blue", "chrono-green", "chrono-red", "chrono-purple", "chrono-pink"];
        let randColor = Math.floor(Math.random() * tabColor.length);

    $("#pause").attr('disabled', 'disabled');
    $("#reset").attr('disabled', 'disabled');

    // Bouton Start
    $("#start").on("click", function () {
        comptage = setInterval(chrono, 10);
        $(this).attr('disabled', 'disabled');
        $("#pause, #reset").removeAttr('disabled').removeClass().addClass("back-green");
        $("#start").removeClass().addClass("back-gray");
    });

    // Bouton pause
    $("#pause").on("click", function () {
        clearInterval(comptage);
        $("#pause").attr('disabled', 'disabled').removeClass().addClass("back-gray");
        $("#reset").removeAttr('disabled');
        $("#start").removeAttr('disabled').text("Resume").removeClass()
        $("#start").addClass("back-green");
    });

    // Bouton Reset
    $("#reset").on("click", function () {

        // Reset des variables et stopage du compteur
        clearInterval(comptage);
        compteurCt = 0;
        compteurSec = 0;
        compteurMin = 0;
        compteurHr = 0;

        // Reset du compteur affiché et des boutons
        $("#chrono").text("0:0:0:0");
        $("#start").text("Start");
        $("#start").removeAttr('disabled');
        $("#pause").attr('disabled', 'disabled');
        $("#reset").attr('disabled', 'disabled');

        // Style
        $("#start, #pause, #reset").removeClass();
        $("#start").addClass("back-green");
        $("#pause, #reset").addClass("back-gray");
    })

})