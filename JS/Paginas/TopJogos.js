const ListaTopJogos = async() =>
{
    let myJson = await RequestTopJogos();
    let topNome = ''
    let topMeta = ''
    let topImg = ''
    console.log(myJson.lenght)
    
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
    console.log(newRow)
    document.querySelector("#TopJogos>.row").appendChild(newRow);
}

    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
}

ListaTopJogos()