//Init GitHub
const github = new GitHub;
//Init UI
const ui = new UI;
//Search Input
const searchUser = document.getElementById('searchUser');
//Search Inut Event Listener
searchUser.addEventListener('keyup', e => {
  //Get Input text
  const userText = e.target.value;
  if (userText != ''){
    //Make HTTP Call
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found'){
        //Show Alert User's not found
        ui.showAlert('User Not Found', 'alert alert-danger');
      }else{
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }else{
    //Clear Profile
    ui.clearProfile();
  }
});
