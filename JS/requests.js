//#region Request das Plataformas disponiveis
const RequestPlataformas = async() =>{
    const response = await fetch(`https://api.rawg.io/api/platforms?key=e8cbd9b8dcd34821a4d0d3acaab7a77d`)
    
     const myJson = await response.json();
     
     if(myJson.length == 0){
         return "erro"
     }
     return myJson
}
//#endregion

//#region  Request Jogos Ordem Alfabetica
const RequestAlfabeticaJogos = async(page = 1 , search = "") =>{
    
    const response = await fetch(`https://api.rawg.io/api/games?key=e8cbd9b8dcd34821a4d0d3acaab7a77d&page=${page}&search=${search}`)
    
    
     const myJson = await response.json();
     
     if(myJson.length == 0){
         return "error"
     }

     
     return myJson
}

//#endregion

//#region TOP jogos segundo as notas do imdb

const RequestTopJogos = async(page = '1') => {
    const response = await fetch (`https://api.rawg.io/api/games?key=e8cbd9b8dcd34821a4d0d3acaab7a77d&ordering=-metacritic&page=${page}`)
    
    const myJson = await response.json();
     
     if(myJson.length == 0){
         return "erro"
     }
     return myJson
}
//#endregion

//#region Developers


const RequestListaDevelopers = async(page = 1) => {
    const response = await fetch (`https://api.rawg.io/api/developers?key=e8cbd9b8dcd34821a4d0d3acaab7a77d&page=${page}&ordering=name`)
    
    const myJson = await response.json();
     
     if(myJson.length == 0){
         return "erro"
     }
     
     return myJson
    }



const RequestDetalhesDevelopers = async(id = 1) => {
    const response = await fetch (`https://api.rawg.io/api/developers/${id}?key=e8cbd9b8dcd34821a4d0d3acaab7a77d`)
    
    const myJson = await response.json();
     
     if(myJson.length == 0){
         return "erro"
     }
     
     return myJson
    }
//#endregion

//#region Generos

const RequestGeneros = async() => {
    const response = await fetch (`https://api.rawg.io/api/genres?key=e8cbd9b8dcd34821a4d0d3acaab7a77d`)
    
    const myJson = await response.json();
     
     if(myJson.length == 0){
         return "erro"
     }
     
     return myJson
    }
    //#endregion

//#region Publishers

const RequestPublishers = async(page = 1) => {
    const response = await fetch (`https://api.rawg.io/api/publishers?key=e8cbd9b8dcd34821a4d0d3acaab7a77d&page=${page}&page_size=1000`)
    
    const myJson = await response.json();
     
     if(myJson.length == 0){
         return "erro"
     }
     
     return myJson
    }

    const RequestJogosFuturos = async(page = 1) =>{
    
        const response = await fetch(`https://api.rawg.io/api/games?key=e8cbd9b8dcd34821a4d0d3acaab7a77d&page=${page}&dates=2021-01-01,2021-10-22`)
        
         const myJson = await response.json();
         
         if(myJson.length == 0){
             return "erro"
         }
         return myJson
    }

    const RequestJogosPorPlataforma = async(idPlat = "" , page = "1") =>{
    
        const response = await fetch(`https://api.rawg.io/api/games?key=e8cbd9b8dcd34821a4d0d3acaab7a77d&page=${page}&platforms=${idPlat}`)
        
        
         const myJson = await response.json();
         
         if(myJson.length == 0){
             return "error"
         }
    
         
         return myJson
    }

    const RequestJogoEspecifico = async(idJogo = "") =>{
    
        const response = await fetch(`https://api.rawg.io/api/games/${idJogo}?key=e8cbd9b8dcd34821a4d0d3acaab7a77d`)
        
        
         const myJson = await response.json();
         
         if(myJson.length == 0){
             return "error"
         }
    
         
         return myJson
    }


    
    