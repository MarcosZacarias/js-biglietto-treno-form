// Request Km trip
const tripKm = parseFloat(prompt("Quanti Km devi viaggiare"));
console.log("Viaggio di " + tripKm + " Km");
console.log(typeof tripKm);

// Request age
const ageUtent = prompt("Scrivi la tue età");
console.log("Età: " + ageUtent);

// Price € x km
const priceKm = 0.21;
console.log("Prezzo per Km " + priceKm);
console.log(typeof priceKm);

// Ticket standard
let ticketStandard = priceKm * tripKm;
console.log("Biglietto standard " + ticketStandard);
console.log(typeof ticketStandard);

// Discount Age
let discountApply;

if (ageUtent >= 65) {
  discountApply = ticketStandard * 0.4;
} else if (ageUtent < 18) {
  discountApply = ticketStandard * 0.2;
} else {
  discountApply = 0;
}

console.log("Sconto applicato " + discountApply);
console.log(typeof discountApply);

// Ticket Final

let ticketFinal = ticketStandard - discountApply;

ticketFinal;
console.log("Biglietto Finale " + ticketFinal);
console.log(typeof ticketFinal);

// Ticket client
const ticketClient = `
<p>Biglietto normale: € ${ticketStandard.toFixed(2)}</p>
<p>Sconto: € ${discountApply.toFixed(2)}</p>

<p>Prezzo biglietto finale: <b> € ${ticketFinal.toFixed(2)}</b></p>
`;

// PRINT TICKET CLIENT IN HTML WITH ID
document.getElementById("ticketTrain").innerHTML = ticketClient;
