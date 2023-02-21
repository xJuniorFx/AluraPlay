import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]')

async function criaVideos(evento){
    evento.preventDefault()

    const imagem = document.querySelector('[data-imagem]').value
    const url = document.querySelector('[data-url]').value
    const titulo = document.querySelector('[data-titulo]').value
    const descricao = Math.floor(Math.random() * 10).toString(2)

    try{ 
        
    await conectaApi.criaVideo(titulo, descricao, url, imagem)
    window.location.href = '../pages/envio-concluido.html'

    } catch (e){
        alert(e)
    }
}

formulario.addEventListener('submit', evento => criaVideos(evento))

