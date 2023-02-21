import { conectaApi } from "./conectaApi.js";
import constroiCard from "./metodoForEach.js";

const btnSearch = document.querySelector('[data-btnSearch]')

document.addEventListener('keypress', evento => {
    if(evento.key === 'Enter'){
        btnSearch.click()
    }
})

btnSearch.addEventListener('click', evento => buscaVideos(evento))

async function buscaVideos(evento){
    evento.preventDefault()
    
    const TermoDePesquisa = document.querySelector('[data-search]').value
    const videoBuscado = await conectaApi.buscaVideos(TermoDePesquisa)
    
    const listaVideos = document.querySelector('[data-videos]')

    listaVideos.innerHTML = ''

    videoBuscado.forEach(video => listaVideos.appendChild(constroiCard(video)))

    if (videoBuscado.length == 0){
        listaVideos.innerHTML = `
        <h2 class="mensagem__titulo">Infelizmente não foi possivel encontrar o video: ${TermoDePesquisa}</h2>
        `
    }
    
}


