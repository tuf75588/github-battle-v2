function fetchPopularRepos(language) {
  const API_URL = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
  return fetch(API_URL)
    .then((repos) => repos.json())
    .then((response) => response.items);
}

export default fetchPopularRepos;
