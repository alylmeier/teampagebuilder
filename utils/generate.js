const generateCard = function generateCard() {
  for (let i = 0; i < team.length; i++) {
    teamHTML += `<div class="card mx-3 my-5" style="width: 18rem;">
              <div class="card-body bg-success text-light">
                <h5 class="card-title"><strong>${team[i].name}</strong></h5>
                <p class="card-text">${team[i].title}</p>
              </div>
              <ul class="list-group list-group-flush p-3 bg-light">
                <li class="list-group-item">ID #: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">${team[i].misc}</li>
              </ul>
          </div>`;
  }
};

module.exports = Generate;
