import { conectaApi } from "./conectaApi.js"

const lista = document.querySelector('[data-videos]')

 export default function constroiCard(video){
    const cardVideo = document.createElement('li')
    cardVideo.classList.add('videos__item')
    cardVideo.innerHTML = `
        <iframe width="100%" height="72%" src="${video.url}"
            title="${video.titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${video.imagem}" alt="logo canal alura">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
        </div>
    `
    return cardVideo
}

async function listaVideos(){
    try{
        const listaApi = await conectaApi.listaVideos()
        listaApi.forEach(video => lista.appendChild(constroiCard(video)))
    } catch{
        lista.innerHTML = `
        <h2 class="mensagem__titulo">Infelizmente não foi possivel conectar com o servidor.</h2>
        <h2 class="mensagem__titulo">Por Favor tente conectar novamente em outra hora</h2>
         `
    }
}

listaVideos()