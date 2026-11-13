// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

const servizi = [
    {
        id: 1,
        icon: "🏠",
        titolo: "Progettazione residenziale",
        paragraph: "Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi",
    },
    {
        id: 2,
        icon: "🪑",
        titolo: "Interior design",
        paragraph: "Allestimenti d'interno per case e uffici, con materiali selezionati e arredo su misura.",
    },
    {
        id: 3,
        icon: "🧱",
        titolo: "Ristrutturazioni",
        paragraph: "Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese.",
    },

]

const lavori = [
    {
        img: "assets/img/600x400.svg",
        titolo: "primo lavoro",
        anno: "2024",
        categoria: "Prima categoria"
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "secondo",
        anno: "2026",
        categoria: "seconda categoria"
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "terzo",
        anno: "2026",
        categoria: "terza categoria"
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "quarto",
        anno: "2024",
        categoria: "Prima categoria"
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "quinto",
        anno: "2026",
        categoria: "seconda categoria"
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "sesto",
        anno: "2026",
        categoria: "terza categoria"
    },
]

const categorie = ['tutti', 'Prima categoria', 'seconda categoria', 'terza categoria']
const categorieSection = document.querySelector('#categorie')

function filtra(categoria) {
    if (categoria == 'tutti') {
        return lavori
    }
    return lavori.filter(l => l.categoria == categoria
    )
}


categorie.forEach((c, i) => {
    const nomeCategoria = document.createElement('button')
    nomeCategoria.textContent = c

    // Al caricamento: il primo ("tutti") è nero (btn-dark), gli altri btn-primary
    nomeCategoria.classList.add('btn-category', 'btn', i === 0 ? 'btn-dark' : 'cButton')

    nomeCategoria.addEventListener('click', () => {
        rowWork.textContent = ''

        // 1. Riporta TUTTI i bottoni a btn-primary
        const allButtons = document.querySelectorAll('.btn-category')
        allButtons.forEach(b => {
            b.classList.remove('btn-dark')
            b.classList.add('cButton')
        })

        // 2. Rendi NERO (btn-dark) solo quello cliccato
        nomeCategoria.classList.remove('cButton')
        nomeCategoria.classList.add('btn-dark')

        renderWork(filtra(c))
    })

    categorieSection.appendChild(nomeCategoria)
})


const rowServices = document.querySelector('#rowServices')

servizi.forEach(s => {
    const div1 = document.createElement('div')
    div1.classList.add('col-12', 'col-md-4')
    const div2 = document.createElement('div')
    div2.classList.add('shadow', 'p-3')
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

const rowWork = document.querySelector('#rowWork')

function renderWork(list) {
    list.forEach(s => {
        const div1 = document.createElement('div')
        div1.classList.add('col-12', 'col-md-6', 'col-lg-4')
        const div2 = document.createElement('div')
        div2.classList.add('shadow', 'p-3')
        const titolo = document.createElement('h4')
        const img = document.createElement('img')
        img.src = s.img
        img.classList.add('img-fluid')
        const anno = document.createElement('span')
        const categoria = document.createElement('p')
        anno.classList.add('icon')
        anno.textContent = s.anno
        titolo.textContent = s.titolo
        categoria.textContent = s.categoria
        rowWork.appendChild(div1)
        div1.appendChild(div2)
        div2.appendChild(img)
        div2.appendChild(titolo)
        div2.appendChild(anno)
        div2.appendChild(categoria)
    })
}

renderWork(lavori)