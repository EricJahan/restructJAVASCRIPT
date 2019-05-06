const name = prompt("Nommez votre personnage");
const gender = prompt("Donnez le sex de votre personnage : male / femelle", `male`);
const race = prompt("Choisissez une race : humain / elfe / nain / demi-humain", `humain`);
const role = prompt("Choisissez une classe : guerrier / ranger / voleur", `guerrier`);

const mainHero = new Hero(name, gender, race, role, 10);

//checkRace(mainHero, mainHero.race);
//checkRole(mainHero, mainHero.role);

console.log(
    `${mainHero.name} rêvait d'aventure depuis des années. Finalement, le jour bénit arriva ! 
    ${mainHero.name} à accepté l'entrainement d'un des Rois ${mainHero.race}. 
    Après avoir battu tous les envahisseurs de son village natal, ${mainHero.name}, 
    s'ennuyant de tant de calme décida de partir à l'aventure. Et pour ce faire,
    votre héro décidait de prendre la caravane pour harpenter les routes du royaume.
    Ne vous étant pas levé à temps, vous avez loupé la caravanne !! Vous rencontrez 
    le caravanier, vous considérant en tant que héro reconnu, il décide de vous offrir un équipement.`,
    mainHero.equipeNewArme({
        name: prompt(`Quelle arme choisis-tu ? (épée, baton, dague, arc)`),
        minDamage: 1,
        maxDamage: 6
    }),
    mainHero.equipeNewArmor({
        name: prompt(`Quel équipement souhaitez-vous porter ? (tissu, maille, plaque)`),
    })

);
