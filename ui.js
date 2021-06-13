class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class='row'>
            <div class='col-md-3'>
              <img class='img-fluid mb-2' src='${user.avatar_url}'></img>
              <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>
            </div>
            <div class='col-md-9'>
              <span class='badge badge-primary m-2'>Public Repos: ${user.public_repos}</span>
              <span class='badge badge-secondary m-2'>Public Gists: ${user.public_gists}</span>
              <span class='badge badge-success m-2'>Followers: ${user.followers}</span>
              <span class='badge badge-info m-2'>Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class='list-group-item'>Company: ${user.company}</li>
                <li class='list-group-item'>Website/Blog: ${user.blog}</li>
                <li class='list-group-item'>Location: ${user.location}</li>
                <li class='list-group-item'>Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class='page-heading mb-3'>Latest Repos</h3>
        <div id='repos'></div>
      `;
    }
    showRepos(repos){
      const rep = document.getElementById('repos');
      console.log(repos);
      let output = '';
      repos.forEach(function(repo){
        output+= `
          <div class='card card-body mb-2'>
            <div class='row'>
              <div class='col-md-6'>
                <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
              </div>
              <div class='col-md-6'>
              <span class='badge badge-primary m-2'>Stars: ${repo.stargazers_count}</span>
              <span class='badge badge-secondary m-2'>Watchers: ${repo.watchers_count}</span>
              <span class='badge badge-success m-2'>Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
        `;
      });
      rep.innerHTML = output;
    }

    showAlert(message,classes){
      while(!document.querySelector('.alert')){
        const alert = document.createElement('div');
        alert.className = classes;
        alert.innerText = message;
        alert.style.textAlign = 'center';
        document.querySelector('body').insertBefore(alert,document.querySelector('.searchContent'));
        setTimeout(() => {document.querySelector('.alert').remove()},2000);
      }
    }
    clearProfile(){
      while(this.profile.firstChild)
        this.profile.removeChild(this.profile.firstChild);
    }
}
