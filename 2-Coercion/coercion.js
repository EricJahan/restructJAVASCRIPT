//Version avec if
function compare(ent1, ent2){
    var rep;
    if (typeof ent1 === typeof ent2) {
        rep = "Types similaires";
    }
    else {
        rep = "Types non similaires";
    }
    console.log(rep);
}
compare("lol", "aze");


/* 
//Version sans if
function compare(ent1, ent2){
    console.log(typeof ent1 + " " + typeof ent2);
    return (typeof ent1 == typeof ent2)?"Types similaires":"Types non similaires";
}

console.log(compare("lol", "aze"));
console.log(compare(1, "1"));
console.log(compare(1, 1.0));
*/