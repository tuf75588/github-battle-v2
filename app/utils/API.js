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

// get basic user profile data.
function getProfile(user) {
  const USER_URL = `https://api.github.com/users/${user}`;
  return fetch(USER_URL)
    .then((user) => user.json())
    .then((response) => response);
}

// repo data for counting number of stars a user has.
function fetchRepos(user) {
  const REPO_URL = `https://api.github.com/users/${user}/repos?per_page=100&type=all`;
  return fetch(REPO_URL)
    .then((repo) => repo.json())
    .then((response) => response);
}
// calculation for getting number of stars a user has.
function getStarCount(repos) {
  // contact github api for number of stars a user has.
  const stars = repos.reduce(
    // eslint-disable-next-line camelcase
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
  return stars;
}

function calculateScore(user, stars) {
  // calculate winning user.
  return user.followers * 3 + getStarCount(stars);
}

function getUserData(user) {
  return Promise.all([getProfile(user), fetchRepos(user)]).then(
    ([user, repos]) => ({
      user,
      score: calculateScore(user, repos),
    })
  );
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
  const promises = players.map(getUserData);
  return Promise.all(promises).then(sortPlayers);
}
