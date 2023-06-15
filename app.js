// console.log("Let's get this party started!");

const gifs = document.querySelector('#gifs');
const form = document.querySelector('#searchForm');
const input = document.querySelector('#search');
const removeBtn = document.querySelector('#remove');

async function searchGif(searchTerm){
    if(searchTerm === ''){
        return;
    }
try{
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    // console.log(res);

    const gifUrl = res.data.data[0].images.downsized_medium.url;
    // console.log(gifUrl);

    const gifImg = document.createElement('img');
    gifImg.setAttribute('src', gifUrl);

    gifs.appendChild(gifImg);
}catch(e){
    alert('please try a different search');
}
    
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(input.value);
    searchGif(input.value);
    input.value = '';
});


removeBtn.addEventListener('click', function(e){
    gifs.innerHTML = '';
});




