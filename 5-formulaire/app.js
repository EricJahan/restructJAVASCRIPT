/**
 * Récuperez les valeurs des champs du formulaire et en faire un joli objet qui sera affiché dans la console.
 * Concaténez les champs firs_name et last_name et dites bonjour à notre cher visiteur dans le titre en 
 * replacant le contenu du span #username
 */

console.log('have fun !');

//test de récup des valeurs entrées
$(".validate").on("click", function(){
    let firstName = $("#first_name").val();
    let lastName = $("#last_name").val();
    let city = $("#city").val();

    console.log("Bienvenue " + firstName + " " + lastName + " de " + city + ".");

    $("body h1>span").text(firstName + " " + lastName + " de " + city + ".");
})