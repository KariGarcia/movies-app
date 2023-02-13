const API_KEY = 'f6de6d0b6f5b087139bcf9d874275636';

const getData = async (url) => {
  const resp = await fetch(url);
  const json = await resp.json();
  return json;
}

export const fetchList = async (category, type = "movie") => {
  return await getData(`https://api.themoviedb.org/3/${type}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
}

export const fetchDetail = async (id, type = "movie") => {
  return await getData(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`);
}

export const search = async (query, type = "movie") => {
  return await getData(`https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${API_KEY}&language=en-US`);
}
