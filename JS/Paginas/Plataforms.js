const TodasPlataformas = async() =>
{
    const myJson = await RequestPlataformas();

    console.log(myJson)
    if (myJson == "erro"){
        return console.log("veio vazio")
    }

    for(var i =0; i < myJson.results.length; i++){
        
        console.log('entrou')
        const option = document.createElement('option')
        option.innerHTML = myJson.results[i].name
        option.value = myJson.results[i].id
        
        document.querySelector("#plataforms").appendChild(option);
        
    }

}




const JogosPorPlataforma = async() =>
{
    const plat = document.getElementById("plataforms").value;

    console.log(plat)
    
    let myJson = await RequestJogosPorPlataforma(plat);
    let topNome = ''
    let topMeta = ''
    let topImg = ''
    
    if (myJson == "erro"){
        return console.log("veio vazio")
    }

    console.log(myJson)
    document.querySelector('.row').innerHTML = ''
    for(let i = 0; i < myJson.results.length ; i++) {
        
        topNome = myJson.results[i].name
        topMeta = myJson.results[i].metacritic
        topImg = myJson.results[i].background_image
        
        if(topImg == null) {
            topImg = "img/114717.png"
        }

        const newRow = document.createElement('div');
        newRow.classList.add('col-md-6')
        
        
        newRow.innerHTML = `
			<div class="review-item">
				<div class="review-cover set-bg" data-setbg="${topImg}">
						<div class="score yellow">${topMeta}</div>
				</div>
						<div class="review-text">
							<h4>${topNome}</h4>						
				</div>
		    </div>
    
    `
    console.log(newRow)
    document.querySelector("#TopJogos>.row").appendChild(newRow);
}

    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
}

TodasPlataformas()