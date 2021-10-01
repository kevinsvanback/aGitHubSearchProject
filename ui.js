class UI {
  constructor() {
    // Store the gitHubUser div in a variable
    this.user = document.getElementById('gitHubUser');
  }

  // Insert HTML and show specific user info in the gitHubUser div
  showUser(profile) {
    this.user.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${profile.avatar_url}">
          <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repositories: ${profile.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
          <span class="badge badge-success">Followers: ${profile.followers}</span>
          <span class="badge badge-info">Following: ${profile.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${profile.company}</li>
            <li class="list-group-item">Website/Blog: ${profile.blog}</li>
            <li class="list-group-item">Location: ${profile.location}</li>
            <li class="list-group-item">Member Since: ${profile.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repositories</h3>
    <div id="repos"></div>
    `;
  }

  // Insert HTML and show user repositories
  showRepositories(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              <span class="badge badge-primary">Public Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repositories
    document.getElementById('repos').innerHTML = output;
  }
}