let refMovieName = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//Get data from API.

function receiveMovie(){
    let movineName = refMovieName.value;
    
    //if field is empty

    if(movineName.length <=0){
        result.innerHTML = '<h3 class="msg">Please enter a movie name </h3>';
    }

}