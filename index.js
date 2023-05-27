let refMovieName = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//Get data from API.

let receiveMovie = () => {
    let movieName = refMovieName.value;
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    
    //if field is empty

    if(movieName.length <= 0){
        result.innerHTML = '<h3 class="msg">Enter a movie name</h3>';
    }


    //if field isn't empty
    else{
        fetch(url).then((resp) => resp.json()).then((data) =>{
            //if exist in db 
            if(data.Response == "True"){
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="star.svg"> 
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                                </div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>   
                `;
            } 
            
            //movie doesn't exist in DB
            else{ 
                
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
        //error occurs
        .catch(() =>{
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
        });
    }
};

searchBtn.addEventListener("click", receiveMovie);

refMovieName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      // Verifica se a tecla pressionada é a tecla "Enter" (código 13)
      receiveMovie();
    }
  });

window.addEventListener("load", receiveMovie);