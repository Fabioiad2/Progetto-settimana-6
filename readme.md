# Atelier — Studio di architettura

Sito vetrina one-page per uno studio di architettura fittizio, realizzato con Bootstrap 5, SASS/SCSS e JavaScript.

## Cosa c'è nel progetto

- **Navbar sticky** con link alle sezioni (`Studio`, `Servizi`, `Lavori`, `Contatti`) e bottone per cambiare tema.
- **Sezione Hero (`#studio`)** a tutta altezza con titolo, descrizione e link diretto al form contatti.
- **Servizi (`#servizi`)** e **Lavori (`#work`)** generati dinamicamente da JavaScript.
- **Form contatti (`#contatti`)** con validazione JS (controllo `@` sull'email e almeno 20 caratteri sul messaggio) e avvisi Bootstrap (`alert-success` / `alert-danger`).
- **Footer** a 3 colonne con indirizzo, link interni e contatti.
- **SCSS organizzato** con `_variables.scss`, `_mixins.scss` (`card-elevata`, `solo-su`) e override dei colori Bootstrap in `style.scss`.

## Extra aggiunti rispetto alla traccia

- **Servizi generati da JS**: invece di scriverli statici in HTML, anche le card dei servizi arrivano da un array di oggetti tramite `createElement`.
- **Stato attivo sui filtri**: i bottoni delle categorie (`Tutti`, `Residenziale`, `Interior design`, `Ristrutturazioni`) evidenziano il filtro selezionato al click.
- **Modale dettaglio lavoro più completa**: cliccando una card si apre la modale Bootstrap con immagine, titolo, categoria, anno e descrizione del progetto.
- **Dark mode completa**: il toggle `Tema scuro / Tema chiaro` adatta non solo lo sfondo del `body`, ma anche card, sezione contatti, campi del form, modale e icona di chiusura.
- **Reset automatico del form**: dopo 5 secondi dall'invio valido, l'avviso di conferma sparisce e il form si svuota da solo.
- **Dettagli di navigazione**: link `Lavori` aggiunto in navbar, `mailto:` e `tel:` cliccabili nel footer e `scroll-padding-top: 50px` per non far coprire i titoli dalla navbar sticky.
