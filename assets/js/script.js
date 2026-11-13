// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

const servizi = [
    {
    id:1,
    icon:"🏠",
    titolo:"Progettazione residenziale",
    paragraph:"Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi",
},
   {
    id:2,
    icon:"🪑",
    titolo:"Interior design",
    paragraph:"Allestimenti d'interno per case e uffici, con materiali selezionati e arredo su misura.",
},
   {
    id:3,
    icon:"🧱",
    titolo:"Ristrutturazioni",
    paragraph:"Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese.",
},
]

const rowServices = document.querySelector('#rowServices')

servizi.forEach(s=>{
    const div1 = document.createElement('div')
    div1.classList.add('col-12','col-md-6','col-lg-4')
    const div2 = document.createElement('div')
    div2.classList.add('shadow','p-3')
    const titolo = document.createElement('h4')
    const icon = document.createElement('span')
    const paragraph = document.createElement('p')
    icon.classList.add('icon')
    icon.textContent = s.icon
    titolo.textContent = s.titolo
    paragraph.textContent = s.paragraph
    rowServices.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(icon)
    div2.appendChild(titolo)
    div2.appendChild(paragraph)
})