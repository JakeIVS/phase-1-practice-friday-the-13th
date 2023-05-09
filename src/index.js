function initialize(){
    fetch ('http://localhost:3000/movies')
    .then(r=>r.json())
    .then(movies=>movies.forEach((film)=>{
        let posters = document.querySelector('#movie-list');
        let poster = document.createElement('img');
        poster.src = film.image
        posters.appendChild(poster);
        poster.addEventListener('click', (e)=>{
            e.preventDefault();
            let moviePage = document.querySelector('#movie-info')
            let movieImage = moviePage.querySelector('#detail-image')
            let movieTitle = moviePage.querySelector('#title')
            let movieYear = moviePage.querySelector('#year-released')
            let movieDescription = moviePage.querySelector('#description')
            movieImage.src = film.image
            movieTitle.textContent = film.title
            movieYear.textContent = film.release_year
            movieDescription.textContent = film.description 
        })
    }))
    fetch ('http://localhost:3000/movies/1')
    .then(r=>r.json())
    .then ((data)=>{
        let moviePage = document.querySelector('#movie-info')
        let movieImage = moviePage.querySelector('#detail-image')
        let movieTitle = moviePage.querySelector('#title')
        let movieYear = moviePage.querySelector('#year-released')
        let movieDescription = moviePage.querySelector('#description')
        movieImage.src = data.image
        movieTitle.textContent = data.title
        movieYear.textContent = data.release_year
        movieDescription.textContent = data.description 
    })
}

initialize();