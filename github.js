class GitHub {
  constructor() {
    // GitHub client ID & Secret code needed to make 100+ calls to it's API
    this.clientID = '3e942e30fa485d4199ef';
    this.clientSecret = 'b42eb3aeca8769a5fc0dcca80282154b818157b2';
    // Set a limit to the amount of repositories shown
    this.repositoryCount = 5;
    // Show them in an ascending order
    this.repositorySort = 'created: asc';
  }

  // Get the GitHub user from the API + whatever is typed into the form
  async getUser(user) {
    const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const repositoryResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repositoryCount}&sort=${this.repositorySort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    // All the user's data stored into a variable
    const userData = await userResponse.json();
    //  All the Users repositories stored into a variable
    const userRepositories = await repositoryResponse.json();

    return {
      user: userData,
      repos: userRepositories
    }
  }
}