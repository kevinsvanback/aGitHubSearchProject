// Add the GitHub class
const github = new GitHub;
// Add the UI class
const ui = new UI;

// Store search input into variable
const searchUser = document.getElementById('searchUser');
const gitHubUser = document.getElementById('gitHubUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text as you write
  const inputText = e.target.value;

  if (inputText !== '') {
    // Make HTTP call
    github.getUser(inputText)
      .then(data => {
        if (data.user.message === 'Not Found') {
          // Show alert (To be implemented)

        } else {
          // Show the user
          ui.showUser(data.user);
          ui.showRepositories(data.repos);
        }
      })
  } else {
    // Clear user (To be implemented)
  }
});