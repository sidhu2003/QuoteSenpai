btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(function(quote){
        let output = '';
                    output += `
                    <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                    <p class="Anime">Anime : ${quote.anime}</p>
                                        <p class="quote">Quote: "${quote.quote}"</p>
                                        <p class="character">Character: ${quote.character}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                document.querySelector('.output').innerHTML = output;
    }) 
})