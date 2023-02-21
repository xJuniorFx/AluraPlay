
async function listaVideos(){

    const promiseVideos = await fetch ('http://localhost:3000/videos')
    const videos = await promiseVideos.json()

    return videos    
}

async function criaVideo(titulo, descricao, url, imagem){
    const promiseVideos = await fetch ('http://localhost:3000/videos', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if(!promiseVideos.ok){
        throw new Error('Não foi possivel enviar o video')
    }

    const videos = await promiseVideos.json()

    return videos
}

async function buscaVideos(termoDeBusca){
    const promiseVideos = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`)
    const videoBuscado =  promiseVideos.json()

    return videoBuscado

}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}
