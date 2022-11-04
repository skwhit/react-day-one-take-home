const apiKey = "fd2ee82";

export const getMoviesByName = async (movieName) => {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
};

getMoviesByName('spiderman');
getMoviesByName('wolverine');