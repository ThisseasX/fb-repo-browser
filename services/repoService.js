export const fetchRepos = () =>
  fetch('https://api.github.com/users/facebook/repos?per_page=100', {
    headers: {
      Authorization: 'token bd0e43bee286d8c2fa8df45443e97c2e2f288857'
    }
  });
