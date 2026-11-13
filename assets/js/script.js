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
        paragraph: "Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi.",
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
        titolo: "Casa Brera",
        anno: "2024",
        categoria: "Residenziale",
        descrizione: "Residenza privata nel cuore di Brera con grandi vetrate sul cortile interno, pavimenti in rovere naturale e volumi essenziali pensati per valorizzare la luce naturale."
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "Loft Navigli",
        anno: "2025",
        categoria: "Interior design",
        descrizione: "Allestimento completo di un open space ex industriale sui Navigli, con arredi su misura in noce canaletto, ferro brunito e illuminazione scenografica."
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "Palazzina Liberty",
        anno: "2024",
        categoria: "Ristrutturazioni",
        descrizione: "Recupero conservativo della facciata storica e riorganizzazione completa degli interni per creare tre unità abitative contemporanee ad alta efficienza energetica."
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "Villa sul Lago",
        anno: "2025",
        categoria: "Residenziale",
        descrizione: "Villa unifamiliare affacciata sul lago di Como con terrazze panoramiche, pietra locale e un dialogo continuo tra architettura e paesaggio."
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "Studio Legale Porta Nuova",
        anno: "2026",
        categoria: "Interior design",
        descrizione: "Progettazione degli interni per uno studio professionale: sale riunioni acusticamente isolate, pareti vetrate e boiserie minimalista."
    },
    {
        img: "assets/img/600x400.svg",
        titolo: "Cascina San Marco",
        anno: "2026",
        categoria: "Ristrutturazioni",
        descrizione: "Riqualificazione integrale di un'antica cascina lombarda trasformata in spazio polifunzionale per eventi, showroom e abitazione."
    },
]

const categorie = ['Tutti', 'Residenziale', 'Interior design', 'Ristrutturazioni']
const categorieSection = document.querySelector('#categorie')

function filtra(categoria) {
    if (categoria === 'Tutti') {
        return lavori
    }
    return lavori.filter(l => l.categoria === categoria)
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

function dettaglio(lavoro) {
    const titleLavoro = document.querySelector('#exampleModalLabel')
    const imgLavoro = document.querySelector('#imgLavoro')
    const categoriaLavoro = document.querySelector('#categoriaLavoro')
    const annoLavoro = document.querySelector('#annoLavoro')
    const descrizioneLavoro = document.querySelector('#descrizioneLavoro')

    titleLavoro.textContent = lavoro.titolo
    imgLavoro.src = lavoro.img
    imgLavoro.alt = lavoro.titolo
    imgLavoro.classList.add('img-fluid')
    categoriaLavoro.textContent = `Categoria: ${lavoro.categoria}`
    annoLavoro.classList.add('h5')
    annoLavoro.textContent = `Anno: ${lavoro.anno}`
    descrizioneLavoro.textContent = lavoro.descrizione
}

function renderWork(list) {
    list.forEach(s => {
        const div1 = document.createElement('div')
        div1.classList.add('col-12', 'col-md-6', 'col-lg-4')
        const div2 = document.createElement('div')
        div2.classList.add('shadow', 'p-3')
        div2.style.cursor = 'pointer'
        div2.setAttribute('data-bs-toggle', 'modal')
        div2.setAttribute('data-bs-target', '#exampleModal')
        div2.addEventListener('click', () => dettaglio(s))
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

const toggleTema = document.querySelector('#toggle-tema')

toggleTema.addEventListener('click', () => {
    const temaScuro = document.body.classList.toggle('dark')
    toggleTema.textContent = temaScuro ? 'Tema chiaro' : 'Tema scuro'
})

const form = document.querySelector('form')
const avviso = document.querySelector('#avviso')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome = document.querySelector('#exampleInputPassword1').value.trim()
    const email = document.querySelector('#exampleInputEmail1').value.trim()
    const select = document.querySelector('#select').value.trim()
    const messaggio = document.querySelector('#messaggio').value.trim()

    if (email.includes('@') && messaggio.length >= 20) {
        const object = {nome, email, select, messaggio}
        console.log(object)
        avviso.classList.remove('alert-danger')
        avviso.textContent = 'Form inviato correttamente'
        avviso.classList.add('alert', 'alert-success')
        setTimeout(()=>{
            avviso.textContent = ''
            avviso.classList.remove('alert', 'alert-success')
            form.reset()
        }, 5000)
    }
    else{
        avviso.classList.remove('alert-success')
        avviso.textContent = 'Inserisci un\'email valida (con "@") e un messaggio di almeno 20 caratteri.'
        avviso.classList.add('alert', 'alert-danger')
    }
})