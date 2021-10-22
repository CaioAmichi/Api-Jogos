const ListaDesenvolvedoras = async() =>
{
    let myJson = await RequestListaDevelopers();
    
    console.log(myJson)
    
    for(let i = 0; i < myJson.results.length ; i++) {
        
       let devNome = myJson.results[i].name
       let devImg = myJson.results[i].image_background
       let topJogosDev = []
       
       for(let j = 0; j < 3; j++){

        topJogosDev.push(myJson.results[i].games[j].name)

       }
        
       
       if(devImg == null) {
            topImg = "img/114717.png"
        }

        const newRow = document.createElement('div');
        newRow.classList.add('col-md-6')

        newRow.innerHTML = `
			<div class="review-item">
				<div class="review-cover set-bg" data-setbg="${devImg}">
						
				</div>
						<div class="review-text">
                            <h3>${devNome}</h3>
                            <p><b>Principais jogos da desenvolvedora</b></p>
							<p>${topJogosDev[0]} <br> ${topJogosDev[1]} <br> ${topJogosDev[2]}</p>
                            
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

ListaDesenvolvedoras()