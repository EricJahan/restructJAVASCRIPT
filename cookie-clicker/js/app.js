$(document).ready(function (){
    const message = [
        "salut", "trouve autre chose à faire", "random", "azdozef"
    ];
    let i = 0;$(".cake").on("click", function(){
        i++;
        console.log(i);
        $(".counter > span").text(i);
        if (i % 20 == 0){
            let rand = Math.floor(Math.random()*4);
            alert(message[rand]);
        }
    })
});