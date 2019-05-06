class BaseCharacter {
    constructor(name, health) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.barriers = {
            attaque: 10,
            discrection: 10,
            convaincre: 10
        };
        this.skill = {
            attaque: 0,
            discrection: 0,
            convaincre: 0
        };
    }
}

class Hero extends BaseCharacter {
    constructor(name, health, gender, race, role) {
        super(name, health);
        this.gender = gender;
        this.race = race;
        this.role = role;
        this.inaptitude = false;
        this.equipedWeapon = [{
            name: "none",
            minDamage: "null",
            maxDamage: "null"
        }];
        this.equipedArmor = [{
            name: "none",
            hitDefBonus: "null"
        }];
    }
    //function levelUP()
    equipeNewArme(newArme){
        this.equipedWeapon = newArme;
    }
    equipeNewArmor(newArmor){
        this.equipedArmor = newArmor;
    }
}

const checkRole = (hero, characterRole) =>{
    let lowerCharactereRole = characterRole.toLowerCase();
    switch(lowerCharactereRole){
        case `guerrier` :
        hero.skill.attaque +=3;
        hero.skill.discrection--;
        break;
        case `ranger`:
        hero.skill.attaque++;
        hero.skill.convaincre++;
        hero.skill.discrection++;
        break;
        case `voleur`:
        hero.skill.attaque--;
        hero.skill.discrection +=3;
        break;
        default :
        characterRole = prompt(`"${characterRole}" n'est pas une classe valide. Veuillez choisir une classe.`);
        hero.characterRole = characterRole;
        checkRole(hero, characterRole);
        break;
    }
}

const checkRace = (hero, characterRace) => {
    let lowerCharacterRace = characterRace.toLowerCase();
    switch(lowerCharacterRace){
        case `humain` :
        break;
        case `elfe` :
        hero.skill.convaincre++;
        hero.barriers.convaincre++;
        hero.skill.attaque--;
        hero.barriers.discrection--;
        break;
        case `nain` :
        hero.skill.attaque++;
        hero.barriers.attaque++;
        hero.skill.discrection--;
        hero.barriers.convaincre--;
        break;
        case `demi-humain` :
        hero.skill.discrection++;
        hero.barriers.discrection++;
        hero.skill.attaque--;
        hero.barriers.convaincre--;
        break;
        default :
        characterRace = prompt(`"${characterRace}" n'est pas une race valide. Veuillez choisir une race.`);
        hero.characterRace = characterRace;
        checkRace(hero, characterRace);
        break;
    }
}



