export function fetchPopularRepos(language) {
  const API_URL = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return fetch(API_URL)
    .then((repos) => repos.json())
    .then((response) => {
      if (!response.items) {
        throw new Error(response.message);
      }
      return response.items;
    });
}

export function fetchUserInfo(player, id) {
  console.log({ player, id });
}
