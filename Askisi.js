let email = prompt("Give your email address");

// Number of passengers, Class and Seat arrengment
let name, surname;
let numSeat, numSeatChlid, pickedClass;
let nameChild, surnameChild;
let namePas = [];
let surnamePas = [];
let numberSeats = [];
let numberOfPass;
let d = 0;

let adults = prompt("How many tickets for adults would you like to purchase for the flight?");
adults = parseInt(adults);

while (adults <= 0) {
    adults = prompt("Invalid input. You must pick up at least one ticket for the flight");
    console.cler;
}

for (let i = 1; i <= adults; i++) {
    name = prompt("Give passenger's number " + i + " Name");
    namePas.push(name);
    surname = prompt("Give passenger's number " + i + " Surname");
    surnamePas.push(surname);
}

let children = prompt("Is a child travelling with you? If Yes press 1, otherwise 0");
children = parseInt(children);

while (children != 0 && children != 1) {
    children = prompt("Invalid input.");
    console.cler;
}

if (children == 1) {
    nameChild = prompt("Give child's Name");
    namePas.push(nameChild);
    surnameChild = prompt("Give child's Surname");
    surnamePas.push(surnameChild);
}

numberOfPass = adults + children;

for (let a = 0; a < 120; a++) {
    numberSeats.push(0);
}

pickedClass = prompt("Pick the class you wish to travel. You can choose either Economy or Business class");

if (pickedClass == "Business" || pickedClass == "business") {
    for (let b = 0; b < adults; b++) {
        numSeat = prompt("Choose seat number for passenger number " + (b + 1) + " from 1 to 20");
        numSeat = parseInt(numSeat);
        while (numSeat < 1 || numSeat > 20) {
            numSeat = prompt("You must choose seat number from 1 to 20");
        }
        while (numberSeats[numSeat - 1] != 0) {
            numSeat = prompt("This seat is taken. Please choose another one");
        }
        numberSeats[(numSeat - 1)] = 1;
        console.log("The seat you chose for passenger " + name + " " + surname + " is " + numSeat);
    }

    if (children == 1 && numSeat != 20) {
        numSeatChlid = numSeat++;
        numberSeats[(numSeatChlid - 1)] = 1;
        console.log("The seat you chose for passenger " + nameChild + " " + surnameChild + " is " + numSeatChlid);
    }
    else if (children == 1) {
        numSeatChlid = 19;
        numberSeats[(numSeatChlid - 1)] = 1;
        console.log("The seat for passenger " + nameChild + " " + surnameChild + " is 19");
    }
}

else if (pickedClass == "Economy" || pickedClass == "economy") {
    for (let c = 0; c < adults; c++) {
        numSeat = prompt("Choose seat number for passenger number " + (c + 1) + " from 21 to 120");
        numSeat = parseInt(numSeat);
        while (numSeat < 21 || numSeat > 120) {
            numSeat = prompt("You must choose seat number from 21 to 120");
        }
        while (numberSeats[(numSeat - 1)] != 0) {
            numSeat = prompt("This seat is taken. Please choose another one");
        }
        numberSeats[(numSeat - 1)] = 1;
        console.log("The seat you chose for passenger " + name + " " + surname + " is " + numSeat);
    }

    if (children == 1 && numSeat != 120) {
        numSeatChlid = numSeat++;
        numberSeats[(numSeatChlid - 1)] = 1;
        console.log("The seat for passenger " + nameChild + " " + surnameChild + " is " + numSeatChlid);
    }
    else if (children == 1) {
        numSeatChlid = 119;
        numberSeats[(numSeatChlid - 1)] = 1;
        console.log("The seat for passenger " + nameChild + " " + surnameChild + " is 119");
    }
}

else {
    while (pickedClass != "Business" || pickedClass != "business" || (pickedClass != "Economy" || pickedClass != "economy")) {
        pickedClass = prompt("Invalid Class input. You can choose either Economy or Business class");
    }
}

// Arrival & Destination Country
let country = ["Greece", "Italy", "France", "Germany", "Portugal", "Poland", "Romania", "Ukraine", "Austria", "Spain"];
let amount = [110, 80, 90, 80, 160, 70, 100, 140, 0, 130];
let home = prompt("Please enter your starting point.\nGreece\nItaly\nFrance\nGermany\nPortugal\nPoland\nRomania\nUkraine\nAustria\nSpain");
let price;


let destination = prompt("Choose your final destination");

if (home == "Austria") {
    for (e = 0; e < country.length; e++) {
        if (destination == country[e]) {
            console.log("The price you will pay for your flight from Austria to " + destination + " will be " + amount[e]);
        }
    }
}
else {
    for (e = 0; e < country.length; e++) {
        if (destination == country[e]) {
            for (f = 0; f < country.length; f++) {
                if (home == country[f]) {
                    price = amount[e] + amount[f];
                    console.log("The price you will pay for your flight from " + home + " to " + destination + " will be " + price);
                }
            }
        }
    }
}

// Handbag & Bag option
let handbag;
handbag = parseInt(handbag);
let bag;
bag = parseInt(bag);
let chargeBag;
let totalPriceBags = 0;
let totalBagsCost;

for (d = 0; d < adults; d++) {
    handbag = prompt("Will you have a handbag for passenger number " + (d + 1) + "? If Yes press 1, otherwise 0");
    bag = prompt("Would you like to take an extra bag of 32kg with you? Choose the amount you wish to purchase for 50 euros each.\nOtherwise press 0");
    if (bag > 0) {
        chargeBag = bag * 50
        console.log("The price you will have to pay for " + bag + " bag(s) is " + chargeBag + " euros");
        totalPriceBags = totalPriceBags + chargeBag;
    }
    else {
        console.log("You did not choose any extra bags for passenger number " + (d + 1));
    }
}

console.log("The final price for the bags you picked for your fligth will be " + totalPriceBags);

// User chooses dates
let dateAr;
let dateDep;
let today = 24 + "/" + 10 + "/" + 2021;

do {
    let ddAR = prompt("Now we will proceed with the date of your arrival and departure.\nThe date must be in the form DD/MM/YEAR and greater than today.\nPlease choose the day you wish to arrive at your destination");
    while (ddAR < 01 || ddAR > 31) {
        ddAR = prompt("Invalid Input. Day must be from 01 to 31");
    }
    let mmAR = prompt("Please choose the month you wish to arrive at your destination");
    while (mmAR > 12 || mmAR < 1) {
        mmAR = prompt("Invalid Input. Month must be from 01 to 12");
    }
    let yyyyAR = prompt("Please choose the year you wish to arrive at your destination");
    while (yyyyAR < 2021) {
        yyyyAR = prompt("Invalid Input. Year must be greater than 2021");
    }
    dateAr = ddAR + "/" + mmAR + "/" + yyyyAR;
    if (dateAr < today) {
        console.log("The arrival date must be greater than today");
    }
    else {
        console.log("The arrival date is " + ddAR + '/' + mmAR + '/' + yyyyAR);
    }
} while (dateAr < today);

do {
    let ddDep = prompt("Please choose the day you wish to depart from your destination");
    while (ddDep < 01 || ddDep > 31) {
        ddDep = prompt("Invalid Input. Day must be from 01 to 31");
    }
    let mmDep = prompt("Please choose the month you wish to depart from your destination");
    while (mmDep > 12 || mmDep < 1) {
        mmDep = prompt("Invalid Input. Month must be from 01 to 12");
    }
    let yyyyDep = prompt("Please choose the year you wish to depart from your destination");
    while (yyyyDep < 2021) {
        yyyyDep = prompt("Invalid Input. Year must be greater than 2021");
    }
    dateDep = ddDep + "/" + mmDep + "/" + yyyyDep;
    if (dateDep < dateAr) {
        console.log("The departure date must be greater than the arrival date " + dateAr);
    }
    else {
        console.log("The departure date is " + ddDep + '/' + mmDep + '/' + yyyyDep);
    }
} while (dateDep < dateAr);

