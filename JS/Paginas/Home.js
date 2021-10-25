//#region Jogos puxados na home
const HomeJogos = async() =>
{
    let myJson = await RequestAlfabeticaJogos();
    
    let topNome = ''
    let topMeta = ''
    let topRating = ''
    let topImg = ''

    
    
    // for(let i = 0; i < 5 ; i++){
    //    topNome.push(myJson.results[i].name)
    //    topMeta.push(myJson.results[i].metacritic)
    //    topRating.push(myJson.results[i].esrb_rating.name)
    // }
    
    for(let i = 0; i < 4 ; i++) {

        topNome = myJson.results[i].name
        topMeta = myJson.results[i].metacritic
        topRating = myJson.results[i].esrb_rating.name
        topImg = myJson.results[i].short_screenshots[0].image
        
        const newRow = document.createElement('div');
        newRow.classList.add('col-lg-3')
        newRow.classList.add('col-md-6')
        newRow.classList.add('p-0')

        newRow.innerHTML = `
        <div class="feature-item set-bg" data-setbg="${topImg}">
			<div class="fi-content text-white">
					<h5><a href="#">${topNome}</a></h5>
					<p>Nota Metacritic: ${topMeta} </p>
					<a href="#" class="fi-comment"> Faixa Etaria: ${topRating} </a>
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

const JogosFavHome = async() =>
{
    const jogosFav = ["5563", "4248", "3876"]
    
    for(let i = 0; i < jogosFav.length ; i++) {

        let myJson = await RequestJogoEspecifico(jogosFav[i]);
        
        
        let nomeJogo = myJson.name
        let imgJogo = myJson.background_image
        let desJogo = myJson.description_raw
        let devJogo = myJson.developers[0].name
        
        
        const newRow = document.createElement('div');
        newRow.classList.add('col-lg-4')
        newRow.classList.add('col-md-6')

        newRow.innerHTML = `
        
		<div class="recent-game-item">
			<div class="rgi-thumb set-bg" data-setbg="${imgJogo}">
			</div>
			<div class="rgi-content">
				<h5>${nomeJogo}</h5>
				<p style = "min-height: 642px;">${desJogo} </p>
				<a href="#" class="comment" >${devJogo}</a>
			</div>
		</div>
    
    `
    document.querySelector("#topJogosHome>.row").appendChild(newRow);
}
$('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
}
//#endregion

//#region 
async function CriaGrafico() {
    var ctx = document.getElementsByClassName('line-chart');
    
    const json = await RequestGeneros()
    
    let labelX = [];
    for (let i = 0; i < json.results.length; i++) {
        labelX.push(json.results[i].name)
    }

    let dadosGraph = [];
    for (let i = 0; i < json.results.length; i++) {
        dadosGraph.push(json.results[i].games_count)
    }
    
    var chartGraph = new Chart(ctx[0], {
        type: 'bar',
        data: {
            labels: labelX,
            datasets: [{
                label: "Quantidade de Jogos Por Genero",
                labelColor:"#ffb323",
                data: dadosGraph,
                dataColor:"#ffb323",
                borderColor: "#ffb323",
                borderWidth: 1,
                backgroundColor: "#ffb320"
            }]
        }
    })
}

async function CriaSegundoGrafico() {
    var ctx = document.getElementsByClassName('line-chart');
    
    const json = await RequestPlataformas()
    
    let labelX = [];
    for (let i = 0; i < json.results.length; i++) {
        labelX.push(json.results[i].name)
    }

    let dadosGraph = [];
    for (let i = 0; i < json.results.length; i++) {
        dadosGraph.push(json.results[i].games_count)
    }
    
    var chartGraph = new Chart(ctx[1], {
        type: 'bar',
        data: {
            labels: labelX,
            datasets: [{
                label: "Quantidade de jogos por Plataforma",
                labelColor:"#ffb323",
                data: dadosGraph,
                dataColor:"#ffb323",
                borderColor: "#ffb323",
                borderWidth: 1,
                backgroundColor: "#ffb320"
            }]
        }
    })
}







//#endregion
HomeJogos()
JogosFavHome()
CriaGrafico()
CriaSegundoGrafico()

