# Calcolo del prezzo del biglietto del treno

## Traccia

Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Istruzioni

Chiedo un form che deve compilare l'usuario:

- Inserichi il tio nome e cognome
- Inserisci quanti km devi viaggiare
- Scrivi la tua età

Creo duo bottoni:

- un bottone per resettare le informazioni inserite
- un bottone per inviare le informazioni inserite

Quando invio le informazini calcolo il biglietto:

Creo valore "_Km inseriti dall'utente da viaggiare_":

- equivale al valore di km indicato dall'utente

Creo un valore "_Età utente_":

- equivale all'età indicata dall'utente

Dopo creo una costante:

- Prezzo biglietto per Km = 0,21 €

Creo un valore "_Biglietto standard_":

- "_Prezzo biglietto per Km_" x "_Km inseriti dall'utente da viaggiare_"

Creo un valore "_sconto_":

- **SE** "_Età utente_" è >= a 65
  - "_sconto applicato_" = "_Biglietto standard_" x 0.40
- **ALTRIMENTI SE** "_Età utente_" è < a 18
  - "_sconto applicato_" = "_Biglietto standard_" x 0.20
- **ALTRIMENTI**
  - "_sconto applicato_" = a 0

Creo un valore "_Biglietto finale_"

- "_Biglietto finale_" = "_Biglietto standard_" - "_sconto applicato_"

Creo un valore "_Biglietto cliente_"

- "_Biglietto cliente_" = "_Biglietto finale_"

Stampo all'utente il biglietto cliente
