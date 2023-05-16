let refMovieName = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//Get data from API.

function receiveMovie(){
    let movineName = refMovieName.value;
    let url = `https://www.omdbapi.com/?t=${movineName}$apikey${key}`;
    //if field is empty

    if(movineName.length <=0){
        result.innerHTML = '<h3 class="msg">Please enter a movie name </h3>';
    }


    //if field isn't empty
    else{
        fetch(url).then((resp) => resp.json()).then((data) =>{
            //if exist in db 
            if(data.response == "True"){
                result.innerHTML = `
                <div class="info">
                    <img src=${data.Poster} class="poster">
                    </div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <img src="star.svg"> 
                            <h4>${data.imdbRating}</h4>

                `

            }
        })
    }
}