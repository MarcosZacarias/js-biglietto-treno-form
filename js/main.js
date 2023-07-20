// Button send information
const sendButton = document.getElementById("btn-send");

// Button reset information
const resetButton = document.getElementById("btn-reset");

// Request informatio
const nameInput = document.getElementById("text-name");
const kmInput = document.getElementById("text-km");
const ageInput = document.getElementById("text-age");

// Value Information
let nameUtent;
let tripKm;
let ageUtent;

sendButton.addEventListener("click", function () {
  // Request Name
  nameUtent = nameInput.value;
  console.log("Passeggero:  " + nameUtent);
  console.log(typeof nameUtent);

  // Request Km trip
  tripKm = parseFloat(kmInput.value);
  console.log("Viaggio di " + tripKm + " Km");
  console.log(typeof tripKm);

  // Request age
  ageUtent = parseInt(ageInput.value);
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
  <h5> Prezzo biglietto</h5>
  <p>Nome Passeggero: ${nameUtent}</p>

<p>Biglietto normale: € ${ticketStandard.toFixed(2)}</p>
<p>Sconto: € ${discountApply.toFixed(2)}</p>

<p>Prezzo biglietto finale: <b> € ${ticketFinal.toFixed(2)}</b></p>
`;

  // PRINT TICKET CLIENT IN HTML WITH ID
  if (ticketFinal) {
    document.getElementById("ticketTrain").innerHTML = ticketClient;
  } else {
    document.getElementById("ticketTrain").innerHTML =
      "Inserisci informazioni necessarie";
  }
});

// RESET BUTTON

resetButton.addEventListener("click", function () {
  // Reset Name
  nameInput.value = "";
  console.log("Passeggero:  " + nameInput);
  console.log(typeof nameInput);

  // Reset Km trip
  kmInput.value = "";
  console.log("Viaggio di " + kmInput + " Km");
  console.log(typeof kmInput);

  // Reset age
  ageInput.value = "";
  console.log("Età: " + ageInput);

  document.getElementById("ticketTrain").innerHTML = "";
});
