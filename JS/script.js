
const TodasPlataformas = async() =>
{
    const myJson = await RequestPlataformas();

    if (myJson == "erro"){
        return console.log("veio vazio")
    }
    
    console.log(myJson)
    const plat = []

    for(var i =0; i < myJson.results.length; i++){

        plat.push(myJson.results[i].name)
    }
    return plat
}


const AlfabeticaJogos = async() =>
{
    const myJson = await RequestAlfabeticaJogos();
    console.log(myJson)
   

    const jogospc = []

//     for(var i =0; i < myJson.results.length; i++){
          
//         console.log
//         if(myJson.results[i].platforms[0].platform.id == 4){
//             jogospc.push(myJson.results[i].name);
//         }
//    }
}
    

const TopJogos = async() =>
{
    const myJson = await RequestTopJogos();

    if (myJson == "erro"){
        return console.log("veio vazio")
    }

    console.log(myJson)
}

const DevelopersLista = async() =>
{
    const myJson = await RequestListaDevelopers();

    if (myJson == "erro"){
        return console.log("veio vazio")
    }

    console.log(myJson)
}

const DetalheDevelopers = async() =>
{
    const myJson = await RequestDetalhesDevelopers();

    if (myJson == "erro"){
        return console.log("veio vazio")
    }

    console.log(myJson)
}


const Generos = async() =>
{
    const myJson = await RequestGeneros();

    if (myJson == "erro"){
        return console.log("veio vazio")
    }

    console.log(myJson)
}


const Publishers = async() =>
{
    const myJson = await RequestPublishers();
    
    
    if (myJson == "erro"){
        return console.log("veio vazio")
    }     
    
    console.log (myJson)
    
}

const JogosFuturos = async() =>
{
    const myJson = await RequestJogosFuturos();
    
    
    if (myJson == "erro"){
        return console.log("veio vazio")
    }     
    
    console.log (myJson)
    
}




const ListaTopJogos = async() =>
{
    let myJson = await RequestTopJogos();
    let topNome = ''
    let topMeta = ''
    let topRating = ''
    let topImg = ''

    
    
    // for(let i = 0; i < 5 ; i++){
    //    topNome.push(myJson.results[i].name)
    //    topMeta.push(myJson.results[i].metacritic)
    //    topRating.push(myJson.results[i].esrb_rating.name)
    // }
    
    for(let i = 0; i < myJson.length ; i++) {

        topNome = myJson.results[i].name
        topMeta = myJson.results[i].metacritic
        topRating = myJson.results[i].esrb_rating.name
        topImg = myJson.results[i].short_screenshots[0].image
        
        const newRow = document.createElement('div');
        newRow.classList.add('col-md-6')

        newRow.innerHTML = `
			<div class="review-item">
				<div class="review-cover set-bg" data-setbg="${topImg}">
						<div class="score yellow">${topMeta}</div>
				</div>
						<div class="review-text">
							<h4>${topNome}</h4>
							<div class="rating">
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
							</div>
				</div>
		    </div>
    
    `
    document.querySelector("#jogosHome>.row").appendChild(newRow);
}
$('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
}




