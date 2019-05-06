//   let ritz = new Hotel();
//     ritz["name"] = "Ritz";
//     ritz["chambres"] = 75;
//     ritz["piscine"] = true;
//     ritz["parking"] = true;
//     ritz["etoiles"] = 6;

//   let georgesV = new Hotel();
//     georgesV["name"] = "Georges V";
//     georgesV["chambres"] = 100;
//     georgesV["piscine"] = true;
//     georgesV["parking"] = false;
//     georgesV["etoiles"] = 6;

// console.log(Hotel);
// console.log(ritz);
// console.log(georgesV);

function Hotel(name, rooms, booked, etoiles, piscine, parking) {
        this.name = name,
        this.chambres = rooms,
        this.resa = booked,
        this.piscine = piscine,
        this.parking = parking,
        this.etoiles = etoiles,
        this.chambresDispo = function () {
            return this.chambres - this.resa;
        }
        this.reservations = function () {
        this.resa += 1;
        return booked;
    },
        this.annulation = function () {
            this.resa -= 1;
            return booked;
        };
}

const novotel = new Hotel("Novotel", 62, 17, 3, false, true);

console.log(novotel);
console.log(novotel.reservations());
console.log(novotel.chambresDispo());
console.log(novotel.resa);